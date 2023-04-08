const express = require('express')
const morgan = require('morgan')

const CharacterRoutes = require('./routes/Character.routes')
const RickAndMortyRoutes = require('./routes/RickAndMorty.routes')
const FavoriteRoutes = require('./routes/Favorite.routes')

const server = express()

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

server.use(express.json())
server.use(morgan('dev'))

server.use('/character', CharacterRoutes)

server.use('/rickandmorty', RickAndMortyRoutes)

server.use('/favorite', FavoriteRoutes)

module.exports = server
