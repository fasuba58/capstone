const express = require('express');
const router = express.Router();
const resetPasswordController = require('../controllers/resetPasswordController');

// Endpoint for reset password
router.post('/', resetPasswordController.resetPassword);

module.exports = router;
