var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var app = express();

mongoose.connect();

var userSchema = new Schema({
  title: { type: String, minLenght: 6, maxLength: 20 },
  description: { type: String },
  tags: { type: String },
  created: {date()},
  number : {type: Number, default : 0}
});

app.listen(4000, () => {
  console.log("port is runing on 4k");
});
