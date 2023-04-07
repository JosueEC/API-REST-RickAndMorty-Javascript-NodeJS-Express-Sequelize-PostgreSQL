const findAllCharacters = require('./rm-find-all-characters')
const URL_BASE = 'https://rickandmortyapi.com/api'

const readAllCharacters = async (req, res) => {
  try {
    const characters = await findAllCharacters(URL_BASE)
    res.status(200).json(characters)
  } catch (error) {
    res.status(200).json({ error: error.message })
  }
}

module.exports = {
  readAllCharacters
}
