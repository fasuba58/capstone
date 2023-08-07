const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Endpoint for login
router.post('/', loginController.login);

module.exports = router;
