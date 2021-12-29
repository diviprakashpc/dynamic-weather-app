import React from "react";

const Section3 = () => {
  return (
    <section id="s3">
      <form id="form">
        <div id="Country-Name:">
          <input
            type="search"
            placeholder="Country"
            name="countryName"
            id="countryName"
          ></input>
        </div>
        <div id="City-Name">
          <input
            type="search"
            name="cityName"
            placeholder="City"
            name="cityName"
            id="cityName"
          ></input>
        </div>
        <button type="submit">Get Weather</button>
      </form>
    </section>
  );
};
export default Section3;