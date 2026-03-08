const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    return res.status(201).json({
      message: "User registered",
      user: {
        username,
        email,
        passwordHash
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const fakeUser = {
      id: 1,
      email,
      role: "user",
      passwordHash: await bcrypt.hash("password123", 10)
    };

    const passwordMatch = await bcrypt.compare(password, fakeUser.passwordHash);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: fakeUser.id, role: fakeUser.role },
      process.env.JWT_SECRET || "change_this_secret",
      { expiresIn: "1h" }
    );

    return res.json({
      message: "User logged in",
      token
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
};
