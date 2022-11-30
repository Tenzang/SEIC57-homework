const express = require("express");
const ejs = require("ejs");
const _ = require("underscore");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);

//this line allows for the use of public library and css
server.use(express.static("public"));

const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/chosen-cocktail", (req, res) => {
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.cocktail}`;
  axios.get(url, { headers: { "Accept-Encoding": "*" } }).then((response) => {
    const cocktail = response.data.drinks[0].strDrink;
    const image = response.data.drinks[0].strDrinkThumb;
    res.render("chosen-cocktail.ejs", {
      cocktail: cocktail,
      image: image,
    });
  });
});

server.get("/random-cocktail", (req, res) => {
  res.render("random-cocktail.ejs");
});

server.listen(PORT, () => {
  console.log(`Now serving on http://localhost: ${PORT}`);
});
