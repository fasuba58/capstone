// Sample user data (replace with your actual data or database)
const users = [];

// Register logic
const register = (req, res) => {
  const { username, password, email } = req.body;

  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ error: "Username already exists." });
  }

  // Create a new user and add it to the users array (or save it to the database)
  const newUser = { id: users.length + 1, username, password, email };
  users.push(newUser);

  res.json({ message: "Registration successful." });
};

module.exports = {
  register,
};
