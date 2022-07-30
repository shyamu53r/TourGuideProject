const express = require("express");
const router = express.Router();
var path = require("path");



router.get("/dawn/offers", (req, res) => {
    res.render("offers");
//   res.sendFile(path.resolve("./public/offers.html"));
  });

module.exports = router;
