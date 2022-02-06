var mongoose = require("mongoose");

var Schema = mongose.Schema;

var userSchema = new Schema({
  village: { type: String },
  city: { type: String },
  state: { type: String },
  pin: { type: Number },
  user: {},
});
