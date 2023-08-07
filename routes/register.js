const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Endpoint for user registration
router.post('/', registerController.register);

module.exports = router;
