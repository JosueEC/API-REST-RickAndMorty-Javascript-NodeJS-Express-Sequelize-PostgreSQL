const express = require('express')
const morgan = require('morgan')

const CharacterRoutes = require('./routes/')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use('/character', CharacterRoutes)

module.exports = server
