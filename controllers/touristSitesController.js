// Sample data for tourist sites (replace with your actual data or database)
const touristSites = [
    { id: 1, name: "Site 1", description: "Description of Site 1" },
    { id: 2, name: "Site 2", description: "Description of Site 2" },
    // Add more sites as needed
  ];
  
  // Get all tourist sites logic
  const getAllTouristSites = (req, res) => {
    res.json({ sites: touristSites });
  };
  
  module.exports = {
    getAllTouristSites,
  };
  