// Sample user data (replace with your actual data or database)
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
    // Add more users as needed
  ];
  
  // Change password logic
  const changePassword = (req, res) => {
    const { old_password, new_password } = req.body;
    // In a real application, you should verify the user's old password before allowing the change.
    // For simplicity, we'll assume the old password is correct here.
  
    // For demonstration purposes, let's update the password for the first user in the users array.
    users[0].password = new_password;
  
    res.json({ message: "Password changed successfully." });
  };
  
  module.exports = {
    changePassword,
  };
  