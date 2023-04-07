const findAllCharacters = require('./find-all-characters')
const createCharacter = require('./create-character')

const readAllCharacters = async (req, res) => {
  try {
    const characters = await findAllCharacters()
    res.status(200).json(characters)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createNewCharacter = async (req, res) => {
  try {
    const { name, gender, specie, status, origin, image } = req.body
    const newCharacter = await createCharacter(
      {
        name, gender, specie, status, origin, image
      }
    )
    res.status(200).json(newCharacter)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const readCharacterByID = async (req, res) => {
  res.json('readCharacterByID')
}

const updateCharacterByID = async (req, res) => {
  res.json('updateCharacterByID')
}

const deleteCharacterByID = async (req, res) => {
  res.json('deleteCharacterByID')
}

module.exports = {
  readAllCharacters,
  createNewCharacter,
  readCharacterByID,
  updateCharacterByID,
  deleteCharacterByID
}
