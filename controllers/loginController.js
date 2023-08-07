// Sample user data (replace with your actual data or database)
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
    // Add more users as needed
  ];
  
  // Login logic
  const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
  
    // In a real application, you should generate and return a secure access token here.
    res.json({ message: "Login successful." });
  };
  
  module.exports = {
    login,
  };
  