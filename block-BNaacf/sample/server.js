var express = require("express");

var mongoose = require("mongoose");

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

var app = express();

app.listen(4000, () => {
  console.log("port is running is 4k");
});
