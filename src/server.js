const express = require('express')
const morgan = require('morgan')

const CharacterRoutes = require('./routes/Character.routes')
const RickAndMortyRoutes = require('./routes/RickAndMorty.routes')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use('/character', CharacterRoutes)

server.use('/rickandmorty', RickAndMortyRoutes)

module.exports = server
