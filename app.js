const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Use separate route files for each functionality
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));
app.use('/api/forgot-password', require('./routes/forgotPassword'));
app.use('/api/reset-password', require('./routes/resetPassword'));
app.use('/api/change-password', require('./routes/changePassword'));
app.use('/api/tourist-sites', require('./routes/touristSites'));
app.use('/api/reservations', require('./routes/reservation'));
app.use('/api/sos-numbers', require('./routes/sosNumbers'));
app.use('/api/cancel-reservation', require('./routes/cancelReservation'));
app.use('/api/reschedule-visit', require('./routes/rescheduleVisit'));
app.use('/api/contact-support', require('./routes/contactSupport'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
