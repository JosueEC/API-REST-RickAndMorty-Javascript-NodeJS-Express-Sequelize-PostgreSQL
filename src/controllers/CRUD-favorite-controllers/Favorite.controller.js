const findAllFavorites = require('./find-all-favorites')
const addFavorite = require('./create-favorite')

const readAllFavorites = async (req, res) => {
  try {
    const favorites = await findAllFavorites()
    res.status(200).json(favorites)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createNewFavorite = async (req, res) => {
  try {
    const { characterID } = req.params

    const newFavorite = await addFavorite(Number(characterID))
    res.status(200).json(newFavorite)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readAllFavorites,
  createNewFavorite
}
