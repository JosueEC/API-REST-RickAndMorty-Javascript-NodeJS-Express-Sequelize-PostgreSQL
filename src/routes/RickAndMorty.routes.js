const { Router } = require('express')

const rmCharacterController = require('../controllers/RM-API-charactercontrollers/RMCharacter.controller')

const router = Router()

router.get('/character', rmCharacterController.readAllCharacters)

router.get('/character/:characterID', rmCharacterController.readCharacterByID)

module.exports = router
