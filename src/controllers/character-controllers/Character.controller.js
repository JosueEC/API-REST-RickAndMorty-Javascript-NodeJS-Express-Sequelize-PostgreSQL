const readAllCharacters = async (req, res) => {
  res.json('readAllCharacters')
}

const createNewCharacter = async (req, res) => {
  res.json('createNewCharacter')
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
