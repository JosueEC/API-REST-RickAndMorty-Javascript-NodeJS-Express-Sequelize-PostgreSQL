const formatCharacter = require('../CRUD-favorite-controllers/formaters/format-favorite-characters')
const fetch = require('node-fetch')

const findCharacter = async (characterID, URL_BASE) => {
  const character = await fetch(`${URL_BASE}/character/${characterID}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatCharacter = formatCharacter([character])
  return newFormatCharacter
}

module.exports = findCharacter
