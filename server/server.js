const express = require('express');
const server = express();
const PORT = 4000;
const bcrypt = require('bcrypt')
const database = require('./queries')

server.use(express.json())

server.get('/', (req, res) => {
    res.send("Funcionando!")
})

server.post('/register', database.register)

server.post('/login', database.login)

server.listen(PORT, () => console.log(`Server backend running on port ${PORT}`))