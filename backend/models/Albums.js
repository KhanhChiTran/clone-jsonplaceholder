const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Album = new Schema({
  userId: Number,
  id: Number,
  title: String
});
module.exports = mongoose.model("album", Album);
