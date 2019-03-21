const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/slow.js", (req, res, next) => {
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "slow.js"));
  }, 4000);
});

app.listen(8003, () => {
  console.log("Listening on localhost:8003");
});