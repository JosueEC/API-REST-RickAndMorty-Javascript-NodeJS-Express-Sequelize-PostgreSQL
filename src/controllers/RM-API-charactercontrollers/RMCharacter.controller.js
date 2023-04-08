const findAllCharacters = require('./rm-find-all-characters')
const findCharactersQuery = require('./rm-find-character-query')
const findCharacter = require('./rm-find-character-ID')

const URL_BASE = 'https://rickandmortyapi.com/api'

const readAllCharacters = async (req, res) => {
  try {
    const { name, status, specie, gender, page } = req.query

    const characters = (name || status || specie || gender || page)
      ? await findCharactersQuery(name, status, specie, gender, page)
      : await findAllCharacters(URL_BASE)

    res.status(200).json(characters)
  } catch (error) {
    res.status(200).json({ error: error.message })
  }
}

const readCharacterByID = async (req, res) => {
  try {
    const { characterID } = req.params

    const character = await findCharacter(characterID, URL_BASE)
    res.status(200).json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readAllCharacters,
  readCharacterByID
}
