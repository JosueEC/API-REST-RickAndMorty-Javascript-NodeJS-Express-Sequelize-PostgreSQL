const { Router } = require('express')

const favoriteController = require('../controllers/CRUD-favorite-controllers/Favorite.controller')

const router = Router()

router.get('/', favoriteController.readAllFavorites)

router.post('/:characterID', favoriteController.createNewFavorite)

module.exports = router
