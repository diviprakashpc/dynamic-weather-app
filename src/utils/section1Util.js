import React from "react";
const apikey = "88d2e6536cda0537a5d775e28fb0b81e";

const createURL = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;
  const reverseurl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;

  return {
    url,
    reverseurl,
  };
};

const fetchData =async (position)=>{
  try {
    const {url,reverseurl} = createURL(position);
    const response = await fetch(url);
    const reverseResponse = await fetch(reverseurl);
    const resJSON = await response.json();
    const revResJSON = await reverseResponse.json();
    return {
        resJSON,
        revResJSON
    }
  }
  catch(error){
    console.log(error.message);
  }
}

export default fetchData;
