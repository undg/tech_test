const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const cors = require("cors");
const calculateScore = require("./calculate-score");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get("/api/greeting", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello World!` }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001"),
);

app.post("/api/scrabble-score", (req, res) => {
  const { word } = req.body;
  const { score, err } = calculateScore(word);
  res.json({ word, score, err });
});
