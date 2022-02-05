var express = require("express");
var mongoose = require("mongoose");

var app = express();

mongoose.connect();

app.listen(4000, () => {
  console.log("app is running on port 4k");
});
