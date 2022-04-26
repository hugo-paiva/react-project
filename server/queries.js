const { Client } = require('pg')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

function initClient() {
    return new Client({
        user: 'postgres',
        password: 'senha',
        host: 'localhost',
        port: 5432,
        database: 'teste-react'
    })
}

async function connection(query, params = null) {
    const client = initClient()
    client.connect()
    let res
    let resultado = {
        content: {},
        message: 'default'
    }
    try {
        res = await client.query(query, params)
        resultado.content = res.rows
        resultado.message = 'Sua query foi executada com sucesso!'
    } catch (error) {
        console.log(error)
        resultado.message = 'Sua query deu erro!'
    }
    console.log(resultado)
    await client.end()
    return resultado
}

const register = async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    bcrypt.hash(password, saltRounds, async (error, hash) => {
        if (error) {
            console.log(error)
        }
        
        console.log(hash)
        const query = "INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3)"
        const params = [username, hash, email]
        const json = await connection(query, params)

        res.json(json)
    })
}

const login = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const query = 'SELECT * FROM accounts WHERE username = $1'
    const json = await connection(query, [username])
    if (json.content.length > 0) {
        bcrypt.compare(password, json.content[0].password, (error, itsTheSame) => {
            if (error) {
                console.log(error)
            }

            json.content[0].isAuthenticated = itsTheSame
            if (itsTheSame) {
                const id = json.content[0].user_id
                const token = jwt.sign({id}, 'secret', {
                    expiresIn: 300
                })
                console.log({authorized: true, token: token, result: json})

                res.cookie('access_token', token, {httpOnly:true}).json({authorized: true, token: token, result: json})
            } else {
                res.json({auth: false, message: "Wrong password/username combination!"})
            }
        })
    } else {
        res.json({auth: false, message: "User doesn't exist!"})
    }

}

module.exports = {
    // getPoints,
    // getPointById,
    // createPoint,
    // deletePoint,
    // updatePoint,
    // createPointWithTime,
    register,
    login
}