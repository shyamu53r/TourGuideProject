const express = require("express");
const router = express.Router();
var path = require("path");


// router.get("/dawn/about", (req, res) => {
//   res.sendFile(path.resolve("./public/services.html"));
  
//   });

  router.get("/dawn/about", (req, res) => {
    res.render("about-us", {
      title1: "Dawn",  
    });
  });

  
module.exports = router;