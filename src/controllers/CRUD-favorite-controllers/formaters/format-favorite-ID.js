const formatFavoritesID = (arrayFavorites) => {
  const newFormat = []

  for (let i = 0; i < arrayFavorites.length; i++) {
    newFormat.push(arrayFavorites[i].favoriteID)
  }

  return newFormat
}

module.exports = formatFavoritesID
