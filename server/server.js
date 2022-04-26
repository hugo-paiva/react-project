const express = require('express');
const server = express();
const PORT = 4000;
const database = require('./queries')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const jwt = require('jsonwebtoken');

server.use(express.json())
server.use(cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    credentials: true
    //lembre de colocar credentials: true no fetch também quando for configurar as requisições do front
}))
server.use(cookieParser())

server.get('/', (req, res) => {
    res.send("Funcionando!")
})

function verifyJWT(req, res, next) {
    const token = (req.cookies.access_token)
    console.log(req.cookies.access_token)

    if (!token) {
        res.send("Hey faltou mandar o token!")
    } else {
        jwt.verify(token, 'secret', (error, decoded) => {
            if (error) {
                console.log(error)
                res.send("Deu erro!")
            } else {
                req.user_id = decoded.id
                next()
            }
        })
    }
}

server.get('/isUserAuth', verifyJWT, (req, res) => {
    console.log(req.user_id)
    res.send("Você está autorizado!")
})

server.post('/register', database.register)

server.post('/login', database.login)
server.post('/paisagem', verifyJWT, database.login)

server.listen(PORT, () => console.log(`Server backend running on port ${PORT}`))