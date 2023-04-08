const { Character } = require('../../database/database')

const findAllFavorites = async () => {
  const favorites = await Character.findAll(
    {
      where: {
        favorite: true
      }
    }
  )

  return favorites
}

module.exports = findAllFavorites
