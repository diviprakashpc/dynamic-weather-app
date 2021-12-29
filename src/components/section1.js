import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import fetchData from "../utils/section1Util";
const Section1 = () => {
  const [weatherData, changeState] = useState({
    cityName:"",
    condition:"",
    temperature:"",
    pressure:"",
    humidity:"",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        // const latitude = position.coords.latitude;
        // const longitude = position.coords.longitude;
        // const apikey = "88d2e6536cda0537a5d775e28fb0b81e";
        // const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;
        // const reverseurl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;

        // const {url,reverseurl} = createURL(position);

      

        // const fetchAPI = async () => {
        //   try {
        //     const response = await fetch(url);
        //     const reverseResponse = await fetch(reverseurl);
        //     const resJSON = await response.json();
        //     const revResJSON = await reverseResponse.json();
        //     console.log(revResJSON);
        //     changeState((state) => ({
        //       ...state,
        //       cityName: `${revResJSON[0].name}`,
        //       condition: `${resJSON.weather[0].description}`,
        //       temperature: `${resJSON.main.temp}`,
        //       pressure: `${resJSON.main.pressure}`,
        //       humidity: `${resJSON.main.humidity}`
        //     }));
        //   } catch (err) {
        //     console.log(err.message);
        //   }
        // };
        // fetchAPI();
        const {resJSON,revResJSON} = fetchData(position);
        changeState((state) => ({
          ...state,
          cityName: `${revResJSON[0].name}`,
          condition: `${resJSON.weather[0].description}`,
          temperature: `${resJSON.main.temp}`,
          pressure: `${resJSON.main.pressure}`,
          humidity: `${resJSON.main.humidity}`
        }));
      });
    } else {
      console.log("Location not supported by browser");
    }
  },weatherData);

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
