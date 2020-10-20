const express = require("express");
const { functions } = require("underscore");
const fs = require('fs');
const path = require('path') ;
var router = express.Router();

var data = require('./data') ;


const json = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

router.get("/", function (req, res) {
   
  res.render("home", { posts: json });
});

router.get("/login", function (req, res) {
  res.render("login", { isLogin: true });
});

router.post("/login", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var isExists = true;
  var User = {};
  //match with database

  if (isExists) {
    User.username = "Rushikesh";
    User.password = "NoPassword";
    data.user = User;
    res.redirect("/");
  } else {
  }
});

router.get("/upload", function (req, res) {
  res.render("upload");
});

router.post("/upload", function (req, res) {
  //file validation
});
module.exports = router;
