const sequelize = require('./database')

async function tryConnection () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been stablished succesfully')
  } catch (error) {
    console.log('Unable to connect to the database', error.message)
  }
}

tryConnection()
