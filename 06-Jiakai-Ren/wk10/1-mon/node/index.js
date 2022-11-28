const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const server = express();

server.set("view-engine", ejs);
const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/drinks", (req, res) => {
  const searchItem = req.query.drink;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`;
  axios
    .get(url, {
      headers: { "Accept-Encoding": "*" },
    })
    .then((response) => {
      console.log(response.data);
      res.render("drinks.ejs", {
        drink: searchItem,
        data: response.data.drinks,
      });
    });
});

server.listen(PORT, () => {
  console.log(`Now servering on http://localhost:${PORT}`);
});
