const taskModel = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, status, projectId, assignedTo } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = await taskModel.createTask(
      title,
      status,
      projectId,
      assignedTo
    );

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create task" });
  }
};
