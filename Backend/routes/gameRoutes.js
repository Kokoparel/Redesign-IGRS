const express = require('express');
const router = express.Router();
const { getAllGamesController, getGameByIdController, createGameController, updateGameController, deleteGameController } = require('../controllers/gameController');

router.get('/', getAllGamesController)
router.get('/:id', getGameByIdController)
router.post('/', createGameController)
router.put('/', updateGameController)
router.delete('/', deleteGameController)

module.exports = router