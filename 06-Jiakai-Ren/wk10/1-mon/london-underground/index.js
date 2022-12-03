const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const server = express();

server.set("view-engine", ejs);
const PORT = 1338;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/status", (req, res) => {
  const url = "https://api.tfl.gov.uk/line/mode/tube/status";

  axios.get(url).then((response) => {
    console.log(response);
    res.render("status.ejs", { data: response.data });
  });
});

server.listen(PORT, () => {
  console.log(`Now servering on http://localhost:${PORT}`);
});
