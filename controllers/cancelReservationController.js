// Sample data for reservations (replace with your actual data or database)
let reservations = [];

// Cancel a reservation logic
const cancelReservation = (req, res) => {
  const { reservation_id } = req.params;
  reservations = reservations.filter((reservation) => reservation.reservation_id !== parseInt(reservation_id));
  res.json({ message: "Reservation canceled successfully." });
};

module.exports = {
  cancelReservation,
};
