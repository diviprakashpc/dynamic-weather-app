import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import fetchData from "../utils/fetchData";
const Section1 = () => {
  const [weatherData, changeState] = useState({
    cityName: "",
    condition: "",
    temperature: "",
    pressure: "",
    humidity: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        (async () => {
          const { resJSON, revResJSON } = await fetchData(position);
          changeState((state) => ({
            ...state,
            cityName: `${revResJSON[0].name}`,
            condition: `${resJSON.weather[0].description}`,
            temperature: `${resJSON.main.temp}`,
            pressure: `${resJSON.main.pressure}`,
            humidity: `${resJSON.main.humidity}`,
          }));
        })();

        // fetchData(position)
        //   .then((result) => {
        //     const {resJSON,revResJSON} = result;
        //     changeState((state) => ({
        //       ...state,
        //       cityName: `${revResJSON[0].name}`,
        //       condition: `${resJSON.weather[0].description}`,
        //       temperature: `${resJSON.main.temp}`,
        //       pressure: `${resJSON.main.pressure}`,
        //       humidity: `${resJSON.main.humidity}`
        //     }));
        //   });
      });
    } else {
      console.log("Location not supported by browser");
    }
  }, []);

  return (
    <>
      <section id="s1">
        <div id="section1-container">
          <h1>{`${weatherData.cityName}`}</h1>
          <p>{weatherData.condition}</p>
          <div id="temperature">{weatherData.temperature}&deg;C</div>
          <div id="pressure-humidity">
            <span id="pressure">Pressure: {weatherData.pressure} Pa</span> |{" "}
            <span id="humidity">Humidity: {weatherData.humidity} AH</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
