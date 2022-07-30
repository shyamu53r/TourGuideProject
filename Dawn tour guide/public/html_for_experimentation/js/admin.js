const express=require("express");
const router=express.Router();
var path=require("path");
const login=require("./logins/login");


// below code will fetch form data and render at given route (below /admin/newProduct )
router.post("/admin/newProduct", (req, res) => {
    // console.log("settt");
    // console.log(req.body);
    res.send("added tshirt : "+req.body.quote);
    const tShirts={
      id : trendingShirts.length+1,
      color :req.body.color,
      size: req.body.size,
      quote: req.body.quote,
      price:req.body.price
    };
    trendingShirts.push(tShirts);
    
  });