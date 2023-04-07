const { Router } = require('express')

const characterController = require('../controllers/CRUD-character-controllers/Character.controller')

const router = Router()

router.get('/', characterController.readAllCharacters)

router.post('/', characterController.createNewCharacter)

router.get('/:characterID', characterController.readCharacterByID)

router.put('/:characterID', characterController.updateCharacterByID)

router.delete('/:characterID', characterController.deleteCharacterByID)

module.exports = router
