const express = require("express");

const app = express();

const books = [{ name: "test", author: "123" }];

app.get("/", (req, res) => {
  res.send("found me!");
});

app.get("/data", (req, res) => {
  res.send(books);
});

app.listen(4000, () => {
  console.log("listening on port 4k");
});
