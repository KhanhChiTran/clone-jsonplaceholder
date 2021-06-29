const mongoose = require("mongoose");
require("dotenv").config;
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connect mongo");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
module.exports = { connectDB };
