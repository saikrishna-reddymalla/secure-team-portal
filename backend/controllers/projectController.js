exports.getProjects = (req, res) => {
  res.json([
    { id: 1, name: "Security Review" },
    { id: 2, name: "Team Dashboard" }
  ]);
};

exports.createProject = (req, res) => {
  res.json({ message: "Project created" });
};
