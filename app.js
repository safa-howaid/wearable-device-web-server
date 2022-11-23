const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

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

// Serve static files
app.use(express.static(path.join(__dirname, "client", "build")));

// Redirect back to index.html if urls do not match
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
