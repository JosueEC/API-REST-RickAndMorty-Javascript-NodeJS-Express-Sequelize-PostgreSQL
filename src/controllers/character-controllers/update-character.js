const { Character } = require('../../database/database')

const updateCharacter = async (characterID, characterData) => {
  const { name, gender, specie, status, origin, image } = characterData
  await Character.update(
    {
      name, gender, specie, status, origin, image
    },
    {
      where: {
        id: characterID
      }
    })

  const getCharacterUpdated = await Character.findByPk(characterID)

  return getCharacterUpdated
}

module.exports = updateCharacter
