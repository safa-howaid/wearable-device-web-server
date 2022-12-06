const mongoose = require("mongoose");
require("dotenv").config({ path: require("find-config")(".env") });

const DB_NAME = "wearableDB";
const uri =
  "mongodb+srv://" +
  process.env["MONGO_USERNAME"] +
  ":" +
  process.env["MONGO_PASSWORD"] +
  "@cluster0.twtfcxt.mongodb.net/" +
  DB_NAME +
  "?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

// Log Status
db.on("connected", () => {
  console.log("database is connected successfully");
});
db.on("disconnected", () => {
  console.log("database is disconnected successfully");
});
db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
