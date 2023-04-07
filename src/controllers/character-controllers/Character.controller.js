const findAllCharacters = require('./find-all-characters')
const createCharacter = require('./create-character')
const findCharacter = require('./find-character')
const deleteCharacter = require('./delete-character')
const updateCharacter = require('./update-character')

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
  try {
    const { characterID } = req.params

    const characterFinded = await findCharacter(characterID)
    res.status(200).json(characterFinded)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateCharacterByID = async (req, res) => {
  try {
    const { characterID } = req.params
    const { name, gender, specie, status, origin, image } = req.body
    const newData = { name, gender, specie, status, origin, image }

    const character = await updateCharacter(characterID, newData)
    res.status(200).json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteCharacterByID = async (req, res) => {
  try {
    const { characterID } = req.params

    const deletedCharacted = await deleteCharacter(characterID)
    res.status(200).json(deletedCharacted)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readAllCharacters,
  createNewCharacter,
  readCharacterByID,
  updateCharacterByID,
  deleteCharacterByID
}
