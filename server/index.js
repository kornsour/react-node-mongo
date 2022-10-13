require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT);
