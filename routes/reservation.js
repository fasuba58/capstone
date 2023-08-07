const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationController');

// Endpoint to book a reservation
router.post('/', reservationsController.bookReservation);

module.exports = router;
