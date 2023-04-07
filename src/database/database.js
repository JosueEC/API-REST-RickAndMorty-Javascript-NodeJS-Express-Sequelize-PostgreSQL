require('dotenv').config()
const Sequelize = require('sequelize')

const { USER, PASSWORD, HOST, NAMEDB } = process.env

const createTableCharacters = require('../models/Character.model')
const createTableGenders = require('../models/Genders.model')
const createTableStatuses = require('../models/Statuses.model')
const createTableSpecies = require('../models/Species.model')

const database = new Sequelize(NAMEDB, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false
})

createTableCharacters(database)
createTableGenders(database)
createTableStatuses(database)
createTableSpecies(database)

module.exports = database
