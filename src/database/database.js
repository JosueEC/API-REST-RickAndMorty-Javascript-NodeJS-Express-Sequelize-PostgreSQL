require('dotenv').config()
const Sequelize = require('sequelize')

const { USER, PASSWORD, HOST, NAMEDB } = process.env

const createTableCharacters = require('../models/Character.model')
const createTableGenders = require('../models/Genders.model')

const database = new Sequelize(NAMEDB, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false
})

createTableCharacters(database)
createTableGenders(database)

module.exports = database
