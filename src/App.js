import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { Box, Container, Typography, TextField } from "@material-ui/core";
import "./App.css";

import { makeStyles } from "@material-ui/styles";

function App() {
  return (
    <>
      <div id="container">
        <section id="s1">
          <div id="section1-container">
            <h1>Warsay</h1>
            <p>light snow</p>
            <div id="temperature">-3&deg;C</div>
            <div id="pressure-humidity">
              <span id="pressure">Weather: Rainy</span> |{" "}
              <span id="humidity">Humidity:84&deg;C</span>
            </div>
          </div>
        </section>

        <section id="s2">
          <div id="section2-container">
            <div>
              <p>
                <b>Lattitude</b>
              </p>
              <p>
                <b>000</b>
              </p>
            </div>
            <div>
              <p>
                <b>Longitude</b>
              </p>
              <p>
                <b>000</b>
              </p>
            </div>
            <div>
              <p>
                <b>Pressure</b>
              </p>
              <p>
                <b>000</b>
              </p>
            </div>
            <div>
              <p>
                <b>Clouds</b>
              </p>
              <p>
                <b>000</b>
              </p>
            </div>
            <div>
              <p>
                <b>Visibility</b>
              </p>
              <p>
                <b>000</b>
              </p>
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
}

export default App;
