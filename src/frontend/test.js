import { useState, useEffect } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  Spinner,
} from "react-bootstrap";
import FormSelect from "react-bootstrap/FormSelect";
import WeatherCards from "./cards";
import WorldWeatherMap from "./WorldWeatherMap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { fetchCountries, fetchCities, fetchWeather } from "./apiService";
import axios from "axios";

function App() {
  // let inputvalue = "THOR";
  const testfunc = (inputvalue) => {
    // Mock input array and index
    let inputIndex = 0;
    const input = [];

    // Mock readline function
    function readline() {
      if (inputIndex < input.length) {
        return input[inputIndex++];
      }
      return "";
    }

    // Setting up the inputs
    input.push("10"); // This would be the first input, the value of P
    input.push("1"); // This would be the second input, the number of subsequent lines N
    input.push("SOME_STRING 10"); // Example input line with a string and a number

    // Main logic
    const P = parseInt(readline());
    const N = parseInt(readline());
    for (let i = 0; i < N; i++) {
      var inputs = readline().split(" ");
      const S = inputs[0];
      const Q = parseInt(inputs[1]);

      // Check the condition and output 'THOR' if Q is 10
      if (Q === 10) {
        console.log("THOR");
      }
    }
  };
  testfunc();

  // console.log(countrylist);
  // console.log(currentCountry);
  return (
    <div className="App">
      <h1>Fun weather app</h1>
    </div>
  );
}

export default App;
