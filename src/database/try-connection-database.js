const database = require('./database')

async function tryConnection () {
  try {
    await database.authenticate()
    console.log('Connection has been stablished succesfully')
  } catch (error) {
    console.log('Unable to connect to the database', error.message)
  }
}

tryConnection()
