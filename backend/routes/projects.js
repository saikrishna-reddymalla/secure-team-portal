const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, projectController.getProjects);
router.post("/", authMiddleware, projectController.createProject);

module.exports = router;
