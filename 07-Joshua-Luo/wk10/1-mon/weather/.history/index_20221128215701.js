const express = require("express");
const ejs = require("ejs");

const server = express();
const PORT = 2022;

server.get("/", (req, res) => {
	res.render("home.ejs");
});

server.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}/`);
});
