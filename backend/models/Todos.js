const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean
});
module.exports = mongoose.model("todo", Todo);
