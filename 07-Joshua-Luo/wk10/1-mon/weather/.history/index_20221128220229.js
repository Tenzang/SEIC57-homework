const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);
const PORT = 2022;
const URL = "http://api.openweathermap.org/data/2.5/weather";
const weatherParams = {
	q: city,
	units: "metric",
	appid: "87f3530b034ce83f07479771285f8bdf", // Thanks random Github user
};

server.get("/", (req, res) => {
	res.render("home.ejs");
});

server.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}/`);
});
