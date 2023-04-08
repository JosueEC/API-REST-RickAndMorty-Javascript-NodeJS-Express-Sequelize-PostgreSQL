const fetch = require('node-fetch')
const formatCharacter = require('./formaters/format-character')

const findCharactersQuery = async (name, status, specie, gender, page) => {
  let URL = 'https://rickandmortyapi.com/api/character?'
  const queryParams = []

  if (name !== undefined) {
    queryParams.push(`name=${name}`)
  }
  if (status !== undefined) {
    queryParams.push(`status=${status}`)
  }
  if (specie !== undefined) {
    queryParams.push(`species=${specie}`)
  }
  if (gender !== undefined) {
    queryParams.push(`gender=${gender}`)
  }
  if (page !== undefined) {
    queryParams.push(`page=${page}`)
  }

  URL += queryParams.join('&')

  const characters = await fetch(`${URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatCharacters = formatCharacter(characters)
  return newFormatCharacters
}

module.exports = findCharactersQuery
