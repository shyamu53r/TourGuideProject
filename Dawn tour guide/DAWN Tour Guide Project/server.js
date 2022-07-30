
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");        // template-generator

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let logger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${formatted_date}] ${method}:${url} ${status}`;
  console.log(log);
  next();
};

app.use(logger);

const Dservice = require("./routes/Location");
app.use(Dservice);

const Dabout = require("./routes/about-us");
app.use(Dabout);

const Dblog = require("./routes/blog");
app.use(Dblog);

const Doffers = require("./routes/offers");
app.use(Doffers);

const Dhome = require("./routes/index");
app.use(Dhome);


app.listen(3000, () => console.log("server started at 3000 port"));
