// Sample data for SOS numbers (replace with your actual data or database)
const sosNumbers = [
    { id: 1, name: "Emergency Service 1", number: "123" },
    { id: 2, name: "Emergency Service 2", number: "911" },
    // Add more SOS numbers as needed
  ];
  
  // Get all SOS numbers logic
  const getAllSOSNumbers = (req, res) => {
    res.json({ sos_numbers: sosNumbers });
  };
  
  module.exports = {
    getAllSOSNumbers,
  };
  