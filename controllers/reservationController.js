// Sample data for reservations (replace with your actual data or database)
let reservations = [];

// Book a reservation logic
const bookReservation = (req, res) => {
  const { site_id, date, guests } = req.body;
  const reservation_id = reservations.length + 1;
  const newReservation = { reservation_id, site_id, date, guests };
  reservations.push(newReservation);
  res.json({ reservation_id, message: "Reservation successful." });
};

module.exports = {
  bookReservation,
};
