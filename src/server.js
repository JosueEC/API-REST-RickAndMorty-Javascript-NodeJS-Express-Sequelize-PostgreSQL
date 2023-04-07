const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.get('/character', (req, res) => {
  res.json('Server Online')
})

module.exports = server
