const express = require('express');
const router = express.Router();
const contactSupportController = require('../controllers/contactSupportController');

// Endpoint for contacting support
router.post('/', contactSupportController.contactSupport);

module.exports = router;
