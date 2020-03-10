const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const books = [{ name: "test", author: "123" }];

app.get("/", (req, res) => {
  res.send("found me!");
});

app.get("/data", (req, res) => {
  res.send(books);
});

app.listen(PORT, () => {
  console.log("listening on port 4k");
});
