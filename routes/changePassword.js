const express = require('express');
const router = express.Router();
const changePasswordController = require('../controllers/changePasswordController');

// Endpoint for changing password
router.put('/', changePasswordController.changePassword);

module.exports = router;
