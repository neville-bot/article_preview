const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
