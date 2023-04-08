const { Character } = require('../../database/database')
const { Favorite } = require('../../database/database')

const formatFavoritesID = require('./formaters/format-favorite-ID')
const formatFavoriteCharacters = require('./formaters/format-favorite-characters')

const fetch = require('node-fetch')
const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const findAllFavorites = async () => {
  const favoritesBD = await Character.findAll(
    {
      where: {
        favorite: true
      }
    }
  )

  const index = await Favorite.findAll(
    { attributes: ['favoriteID'] }
  )

  const newFormatIndex = formatFavoritesID(index)

  const favoritesAPI = await fetch(`${URL_BASE}/${newFormatIndex}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatFavoritesAPI = formatFavoriteCharacters(favoritesAPI)

  return newFormatFavoritesAPI.concat(favoritesBD)
}

module.exports = findAllFavorites
