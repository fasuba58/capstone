// Sample user data (replace with your actual data or database)
const users = [
    { id: 1, username: "user1", email: "user1@example.com", password: "password1" },
    { id: 2, username: "user2", email: "user2@example.com", password: "password2" },
    // Add more users as needed
  ];
  
  // Forgot password logic
  const forgotPassword = (req, res) => {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);
  
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
  
    // In a real application, you should send an email with a password reset link here.
    res.json({ message: "Password reset instructions sent to your email." });
  };
  
  module.exports = {
    forgotPassword,
  };
  