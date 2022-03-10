var express = require("express");
var mongoose = require("mongo");
var app = express();

mongoose.connect();

app.app.listen(5000, console.log("port is running on 5k"));
