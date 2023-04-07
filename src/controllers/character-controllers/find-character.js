const { Character } = require('../../database/database')

const findCharacter = async (id) => {
  const characterFinded = await Character.findByPk(id)
  if (!characterFinded) throw Error(`Personaje con el id ${id} no existe`)

  return characterFinded
}

module.exports = findCharacter
