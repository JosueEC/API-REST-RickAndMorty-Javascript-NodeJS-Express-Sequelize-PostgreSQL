const { Character } = require('../../database/database')

const findAllCharacters = async () => {
  const characters = await Character.findAll()

  return characters
}

module.exports = findAllCharacters
