const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Security Review" },
    { id: 2, name: "Team Dashboard" }
  ]);
});

router.post("/", (req, res) => {
  res.json({ message: "Project created" });
});

module.exports = router;
