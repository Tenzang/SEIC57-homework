const express = require("express");
const ejs = require("ejs");
const _ = require("underscore");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);
server.use(express.static("public"));
const PORT = 1337;

server.listen(PORT, () => console.log("Server is running"));

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/book", (req, res) => {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=title:" + req.query.title,
      {
        headers: { "Accept-Encoding": "*" },
      }
    )
    .then((response) => {
      res.render("book.ejs", {
        title: req.query.title,
        book: response.data.items[0].volumeInfo.imageLinks.thumbnail,
      });
    });
});
