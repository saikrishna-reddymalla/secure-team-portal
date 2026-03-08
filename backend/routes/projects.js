const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Security Review" }]);
});

router.post("/", (req, res) => {
  res.json({ message: "Project created" });
});

module.exports = router;
