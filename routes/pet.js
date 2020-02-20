const express = require('express');

const router = express.Router();

const petController = require('../controller/pet');

router.get('/', petController.index);
router.get('/add/:nome', petController.add);
router.get('/buscar/:nome', petController.buscar);

module.exports = router;