const express = require('express');
const server = express();
const PORT = 4000;
const { Client } = require('pg')

server.use(express.json())

server.get('/', (req, res) => {
    res.send("Funcionando!")
})

function initClient() {
    return new Client({
        user: 'postgres',
        password: 'senha',
        host: 'localhost',
        port: 5432,
        database: 'teste-react'
    })
}

server.post('/register', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    console.log(username, password)
    const client = initClient()
    client.connect()
    const query = "INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3)"
    const params = [username, password, email]
    res = await client.query(query, params)
    console.log(res.rows)
    await client.end()

    res.send("tranks")
})

server.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const client = initClient()
    client.connect()
    const query = 'SELECT * FROM accounts WHERE username = $1 AND password = $2'
    const params = [username, password]
    const result = await client.query(query, params)
    console.log(result.rows)
    await client.end()
    res.json(result.rows[0])
})

server.listen(PORT, () => console.log(`Server backend running on port ${PORT}`))