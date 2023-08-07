const express = require('express');
const router = express.Router();
const cancelReservationController = require('../controllers/cancelReservationController');

// Endpoint to cancel a reservation
router.delete('/:reservation_id', cancelReservationController.cancelReservation);

module.exports = router;
