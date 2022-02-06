var express = require("express");
var mongoose = require("mongoose");

var app = express();

mongoose.connect(
  "mongodb://localhost/sample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err ? err : "connect mongodb");
  }
);

app.listen(4000, () => {
  console.log("port 4k is running");
});
