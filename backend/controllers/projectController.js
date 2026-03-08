const projectModel = require("../models/projectModel");

exports.getProjects = async (req, res) => {
  try {
    const projects = await projectModel.getAllProjects();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch projects" });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Project name is required" });
    }

    const project = await projectModel.createProject(
      name,
      description || "",
      req.user.userId
    );

    return res.status(201).json(project);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create project" });
  }
};
