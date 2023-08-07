const express = require('express');
const router = express.Router();
const touristSitesController = require('../controllers/touristSitesController');

// Endpoint to get all tourist sites
router.get('/', touristSitesController.getAllTouristSites);

module.exports = router;
