const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);

const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/city", (req, res) => {
  const city = req.query.city;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e2b5118272c249590bdb6da1622ee2fd`;

  axios.get(url).then((response) => {
    const lat = response.data[0].lat;
    const long = response.data[0].lon;
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e2b5118272c249590bdb6da1622ee2fd`;

    axios.get(url2).then((response) => {
      console.log(response.data);
      const temperature = response.data.main.temp;
      const icon = response.data.weather[0].icon;
      const description = response.data.weather[0].description;

      res.render("city.ejs", {
        city: city,
        lat: lat,
        long: long,
        temperature: temperature,
        icon: icon,
        description: description,
      });
    });
  });
});

server.listen(PORT, () => {
  console.log(`Now serving on http://localhost:${PORT}`);
});
