const express = require("express");
const router = express.Router();
var path = require("path");



router.get("/dawn/blog", (req, res) => {
    res.render("blog");
//   res.sendFile(path.resolve("./public/blog.html"));
  });

module.exports = router;
