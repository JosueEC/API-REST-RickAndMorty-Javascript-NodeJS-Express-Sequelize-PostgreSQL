const { Character } = require('../../database/database')

const deleteCharacter = async (characterID) => {
  const character = await Character.findByPk(characterID)
  const temp = { ...character }
  await character.destroy()
  return temp.dataValues
}

module.exports = deleteCharacter
