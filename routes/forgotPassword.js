// const express = require('express');
// const router = express.Router();
// const forgotPasswordController = require ('../controllers/forgotPasswordController');

// // Endpoint for forgot password
// router.post('/', 'forgotPasswordController.forgotPassword');

// module.exports = router;

const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotpasswordController.js');

// Endpoint for forgot password
router.post('/', forgotPasswordController.forgotPassword);

module.exports = router;
