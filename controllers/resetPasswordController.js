// Sample user data (replace with your actual data or database)
const users = [
    { id: 1, username: "user1", email: "user1@example.com", password: "password1" },
    { id: 2, username: "user2", email: "user2@example.com", password: "password2" },
    // Add more users as needed
  ];
  
  // Reset password logic
  const resetPassword = (req, res) => {
    const { token, new_password } = req.body;
  
    // In a real application, you should verify the token and update the user's password.
    // For simplicity, we'll assume the token is valid here.
    users.forEach((user) => {
      if (user.email === token) {
        user.password = new_password;
      }
    });
  
    res.json({ message: "Password reset successful." });
  };
  
  module.exports = {
    resetPassword,
  };
  