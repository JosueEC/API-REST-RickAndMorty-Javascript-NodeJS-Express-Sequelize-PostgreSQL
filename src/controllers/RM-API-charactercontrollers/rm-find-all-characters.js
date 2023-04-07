const fetch = require('node-fetch')
const formatCharacter = require('./formaters/format-character')

const findAllCharacters = async (URL_BASE) => {
  const characters = await fetch(`${URL_BASE}/character`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatCharacters = formatCharacter(characters.results)
  return newFormatCharacters
}

module.exports = findAllCharacters
