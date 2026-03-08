const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, title: "Fix auth bug" }]);
});

router.post("/", (req, res) => {
  res.json({ message: "Task created" });
});

module.exports = router;
