const express = require('express');
const server = express();
const PORT = 4000;
const database = require('./queries')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')

server.use(express.json())
server.use(cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    credentials: true
}))
server.use(cookieParser())
// server.use(bodyParser.urlencoded({extended: true}))

server.get('/', (req, res) => {
    res.send("Funcionando!")
})

server.post('/register', database.register)

server.post('/login', database.login)

server.listen(PORT, () => console.log(`Server backend running on port ${PORT}`))