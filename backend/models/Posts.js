const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});
module.exports = mongoose.model("post", Post);
