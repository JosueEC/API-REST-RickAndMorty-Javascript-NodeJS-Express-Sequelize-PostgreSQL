require('dotenv').config()
const Sequelize = require('sequelize')

const { USER, PASSWORD, HOST, NAMEDB } = process.env

const createTableCharacters = require('../models/Character.model')
const createTableFavorites = require('../models/Favorite.model')

const database = new Sequelize(NAMEDB, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false
})

createTableCharacters(database)
createTableFavorites(database)

module.exports = {
  database,
  ...database.models
}
