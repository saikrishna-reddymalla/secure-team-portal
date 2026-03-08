exports.register = (req, res) => {
  res.json({ message: "User registered" });
};

exports.login = (req, res) => {
  res.json({ message: "User logged in" });
};
