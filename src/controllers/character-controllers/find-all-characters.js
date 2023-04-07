const { Character } = require('../../database/database')

const findAllCharacters = async () => {
  const characters = await Character.findAll(
    // {
    //   attributes: ['id', 'name', 'origin', 'image']
    // }
  )

  return characters
}

module.exports = findAllCharacters
