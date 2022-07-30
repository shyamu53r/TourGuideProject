const express = require("express");
const router = express.Router();
var path = require("path");



router.get("/dawn/home", (req, res) => {
    res.render("index");
//  res.sendFile(path.resolve("./public/index.html"));
  });

module.exports = router;
