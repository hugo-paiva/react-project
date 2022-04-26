const express = require('express')
const server = express()
const PORT = 4000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const database = require('./queries')
const verifyJWT = require('./verify')

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

server.get('/isUserAuth', verifyJWT, (req, res) => {
    console.log(req.user_id)
    res.send("Você está autorizado!")
})

server.post('/register', database.register)

server.post('/login', database.login)

server.listen(PORT, () => console.log(`Server backend running on port ${PORT}`))