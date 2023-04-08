const { Character } = require('../../database/database')

const createCharacter = async (dataCharacter) => {
  const { name, gender, specie, status, origin, image, favorite } = dataCharacter

  const newCharacter = await Character.create(
    { name, gender, specie, status, origin, image, favorite }
  )

  return newCharacter
}

module.exports = createCharacter
