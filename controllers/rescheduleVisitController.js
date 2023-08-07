// Sample data for reservations (replace with your actual data or database)
let reservations = [];

// Reschedule a reservation logic
const rescheduleVisit = (req, res) => {
  const { reservation_id } = req.params;
  const { new_date } = req.body;
  reservations = reservations.map((reservation) => {
    if (reservation.reservation_id === parseInt(reservation_id)) {
      return { ...reservation, date: new_date };
    }
    return reservation;
  });
  res.json({ message: "Reservation rescheduled successfully." });
};

module.exports = {
  rescheduleVisit,
};
