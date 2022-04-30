import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const Section2 = () => {
  const [weatherData, changeState] = useState({
    latitude: "",
    longitude: "",
    windSpeed: "",
    clouds: "",
    visibility: "",
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        (async () => {
          const { resJSON,revResJSON }= await fetchData(position);
          console.log(resJSON);
        changeState((state) => ({
          ...state,
          latitude: `${resJSON.coord.lat}`,
          longitude: `${resJSON.coord.lon}`,
          windSpeed: `${resJSON.wind.speed}`,
          clouds: `${resJSON.clouds.all}`,
          visibility: `${resJSON.visibility}`,
        }));
      })();
    });
    } else {
      console.log("Location not supported by Browser");
    }
  }, []);

  return (
    <section id="s2">
      <div id="section2-container">
        <div>
          <p>
            <b>Lattitude</b>
          </p>
          <p>
            <b>{weatherData.latitude}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Longitude</b>
          </p>
          <p>
            <b>{weatherData.longitude}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Wind</b>
          </p>
          <p>
            <b>{weatherData.windSpeed}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Clouds</b>
          </p>
          <p>
            <b>{weatherData.clouds}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Visibility</b>
          </p>
          <p>
            <b>{weatherData.visibility}</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
