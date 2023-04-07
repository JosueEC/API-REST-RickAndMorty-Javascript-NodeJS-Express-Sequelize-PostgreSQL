require('dotenv').config()
const Sequelize = require('sequelize')

const { USER, PASSWORD, HOST, NAMEDB } = process.env

const createTableCharacters = require('../models/Characters.model')
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

const { Characters, Genders, Species, Statuses } = database.models

Characters.hasOne(Genders)
Genders.belongsTo(Characters)

Characters.hasOne(Species)
Species.belongsTo(Characters)

Characters.hasOne(Statuses)
Statuses.belongsTo(Characters)
// Estas dos intrucciones deben ir juntas para establecer la relacion
// One to One

module.exports = {
  database,
  ...database.models
}
