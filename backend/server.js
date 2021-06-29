require("dotenv").config();
const routes = require("./routes");
const db = require("./config/db");
const express = require("express");
const PORT = 3000;

db.connectDB();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);
app.listen(PORT, console.log("Server running ..."));
