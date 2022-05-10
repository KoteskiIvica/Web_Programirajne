const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

router.post("/", (req, res) => {
  res.json({ data: " Hello " });
});

router.delete("/:id", (req, res) => {
  res.json({ data: "Delete item" });
});
router.patch("/:id", (req, res) => {
  res.json({ data: "Update PATH" });
});
module.exports = router;
