const express = require("express");
const path = require("path");
const app = express();
const port = 3100;
const blogModel = require('./db_model')
const router = require("./router.js");
const handlebars = require("express-handlebars");
const { route } = require("./router.js");
const { functions } = require("underscore");

const bodyParser = require("body-parser");

 

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public/")));
  
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials", 
    helpers : require('./config/hbs-helpers') 
  })
);

app.use(router);

app.listen(3000, function () {
  console.log("This");
});

//commenting the file