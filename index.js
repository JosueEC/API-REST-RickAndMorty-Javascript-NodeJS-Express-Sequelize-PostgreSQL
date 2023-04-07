const server = require('./src/server')
const { database } = require('./src/database/database')
const PORT = '3001'

database.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server listening on port: ', PORT)
    })
  }).catch((error) => console.log(error.message))
