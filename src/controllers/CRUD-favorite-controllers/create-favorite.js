const { Favorite } = require('../../database/database')

const addFavorite = async (characterID) => {
  console.log('ID: ', typeof characterID)
  const favorite = await Favorite.create(
    {
      favoriteID: characterID
    }
  )

  return favorite
}

module.exports = addFavorite
