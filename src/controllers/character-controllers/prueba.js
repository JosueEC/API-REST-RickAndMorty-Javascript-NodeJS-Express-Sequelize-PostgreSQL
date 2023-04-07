const Characters = require('../../models/Characters.model')
const Genders = require('../../models/Genders.model')

const findAllCharacters = async (req, res) => {
  const characters = Characters.findAll(
    {
      attributes: ['name', 'origin'],
      include: {
        model: Genders,
        attributes: ['gender']
      }
    }
  )

  return characters
}

module.exports = findAllCharacters
