const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
});
router.get("/404", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});
router.get("/*", (req, res) => {
  res.redirect(301, "/404");
});
module.exports = router;
