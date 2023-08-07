const express = require('express');
const router = express.Router();
const sosNumbersController = require('../controllers/sosNumbersController');

// Endpoint to get all SOS numbers
router.get('/', sosNumbersController.getAllSOSNumbers);

module.exports = router;
