const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});
module.exports = mongoose.model("comment", Comment);
