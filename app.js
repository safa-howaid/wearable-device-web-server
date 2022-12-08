const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
var cors = require("cors");
const db = require("./database");

// Start app
const app = express();

// Express port
const PORT = process.env.PORT || 8000;

// Add express middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

// Setting up basic API route
app.get("/api/", (req, res) => {
  return res.status(200).json({
    status: "success",
  });
});

// Resolve cross-origin request errors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
  next();
});

// Add user router
const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

// Add user biometrics router
const userBiometricsRouter = require("./routes/user.biometrics.routes");
app.use("/api", userBiometricsRouter);

// Serve static files
app.use(express.static(path.join(__dirname, "client", "build")));

// Redirect back to index.html if urls do not match
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
