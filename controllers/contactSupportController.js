// Contact support logic
const contactSupport = (req, res) => {
    const { name, email, message } = req.body;
    // In a real application, you might want to store the support request in a database for tracking purposes.
    res.json({ message: "Support request submitted." });
  };
  
  module.exports = {
    contactSupport,
  };
  