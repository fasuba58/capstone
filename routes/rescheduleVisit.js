const express = require('express');
const router = express.Router();
const rescheduleVisitController = require('../controllers/rescheduleVisitController');

// Endpoint to reschedule a reservation
router.put('/:reservation_id', rescheduleVisitController.rescheduleVisit);

module.exports = router;
