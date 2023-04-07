require('dotenv').config()
const Sequelize = require('sequelize')

const { USER, PASSWORD, HOST, NAMEDB } = process.env

const sequelize = new Sequelize(NAMEDB, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres'
})

module.exports = sequelize
