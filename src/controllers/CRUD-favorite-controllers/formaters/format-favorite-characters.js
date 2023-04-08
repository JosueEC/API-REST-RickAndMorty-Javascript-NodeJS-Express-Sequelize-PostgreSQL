const formatCharacter = (characters) => {
  if (characters.length === 0) throw Error('No haz agregado ningun favorito de la API')

  const newFormatResults = []

  for (let i = 0; i < characters.length; i++) {
    const character = {
      id: characters[i].id,
      name: characters[i].name,
      gender: characters[i].gender,
      specie: characters[i].species,
      status: characters[i].status,
      origin: characters[i].origin.name,
      image: characters[i].image
    }
    newFormatResults.push(character)
  }

  return newFormatResults
}

module.exports = formatCharacter
