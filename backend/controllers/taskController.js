exports.getTasks = (req, res) => {
  res.json([
    { id: 1, title: "Fix auth flow", status: "open" },
    { id: 2, title: "Add audit logs", status: "in-progress" }
  ]);
};

exports.createTask = (req, res) => {
  res.json({ message: "Task created" });
};
