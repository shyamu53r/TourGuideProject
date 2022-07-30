const express = require("express");
const router = express.Router();
var path = require("path");



router.get("/dawn/Locations", (req, res) => {
  res.render("Location");
  // res.sendFile(path.resolve("./public/services.html"));

  });

module.exports = router;
