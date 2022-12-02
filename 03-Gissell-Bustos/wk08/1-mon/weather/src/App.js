import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeaterCard from "./components/WeatherCard";

const URL = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = `2ffd02bbb6e734625dbe1c6bcfcae9e9`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `${URL}?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data);
        // setData(data);
      });
  }, []);
  return (
    <div className="main">
      <Header />
      <WeaterCard />
    </div>
  );
}
export default App;
