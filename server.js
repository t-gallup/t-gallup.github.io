const express = require("express");
const port = 80;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/styles.css", (req, res) => {
  res.sendFile(__dirname + "/styles.css");
});

app.get("/styles.css", (req, res) => {
  res.sendFile(__dirname + "/script.js");
});

app.listen(port, () => {
  console.log(`Tyler Gallup's Website listening at http://localhost:${port}`);
});
