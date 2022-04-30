import React, { useEffect } from "react";
import fetchData from "./fetchData";
import { useState } from "react";

var description = "";

const getPath =  () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { resJSON, revResJSON } = await fetchData(position);
      console.log(resJSON);
      description = resJSON.weather[0].description;
      console.log(description);

      let currentWallPath = "";
      console.log("description", description);
      switch (description) {
        case "clear sky":
          currentWallPath = "./images/clear.gif";
          break;

        case "few clouds":
          currentWallPath = "./images/clouds.gif";
          break;

        case "snow":
          currentWallPath = "./images/snow.gif";
          break;

        case "rain":
          currentWallPath = "./images/rain.gif";
          break;

        case "mist":
          currentWallPath = "./images/fog.gif";
          break;

        case "thunderstorm":
          currentWallPath = "./images/thunderstorm.gif";
          break;

        default:
          currentWallPath = "./images/snow.gif";
          break;
      }
      console.log('returning', currentWallPath);
      return currentWallPath;
    });
  } else {
    console.log("Location not available");
    return ("Location not available");
  }
};


export default getPath;
