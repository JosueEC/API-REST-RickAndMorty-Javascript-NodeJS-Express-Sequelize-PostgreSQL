const { Character } = require('../../database/database')

const createCharacter = async (dataCharacter) => {
  const { name, gender, specie, status, origin, image } = dataCharacter

  const newCharacter = await Character.create(
    { name, gender, specie, status, origin, image }
  )

  return newCharacter
}

module.exports = createCharacter
