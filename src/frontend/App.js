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

// const BASE_URL =
// "https://weatherappbackend-k6pp.onrender.com/apidocs/#/default/get_api_weather"; // Swagger API URL
// "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris%20&country=France";
// const API_KEY = "4c030262d17b5f16a57f1a288881aabb";
// https://dummyjson.com/products
// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
// const countryUrl = "https://restcountries.com/v3.1/all?fields=name,flags`";

// let cityname;

// let leti = 28.6667;
// let longi = 77.2167;

const url =
  "https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=india&language=en";
// "https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin";
// "https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=37.81021&lon=-122.42282&language=en&units=auto";

const Weather_API =
  "https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7abd618da1msh25b7e4a8c0ea807p1c3e92jsn224b183ad913",
    "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
    "Content-Type": "application/json",
    Accept: "*/*",
  },
};

const paramFrance = {
  city: "Paris",
  country: "france",
};
const paramIran = {
  city: "Tehran",
  country: "Iran",
};
const paramDenmark = {
  city: "Copenhagen",
  country: "Denmark",
};
const paramEngland = {
  city: "London",
  country: "England",
};
const paramGermany = {
  city: "Berlin",
  country: "Germany",
};

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [countrylist, setCountrylist] = useState([]);
  const [citylist, setCitylist] = useState({
    city: "Copenhagen",
    country: "Denmark",
  });

  const [currentCity, setCurrentCity] = useState("Not selected");

  const [currentCountry, setCurrentCountry] = useState([]);
  // const [testalldata, setTestalldata] = useState([]);

  const getcountryname = (e) => {
    // setCountry(e.currentTarget.value);
    setCurrentCountry(e.currentTarget.value);
  };

  const getCityName = (e) => {
    setCurrentCity(e.target.value);
  };

  useEffect(() => {
    //   const getCountry = async () => {
    //       return fetch(`https://restcountries.com/v3.1/all?fields=name,flags`).then((response) => response.json().then(data => setCountrylist(data)));
    // }

    const getWeatherData = async () => {
      // return fetch(`${weatherUrl}q=${"Delhi"}&appid=${API_KEY}`).then(
      //   (response) =>
      //     response.json().then((data) => {
      //       setWeather(data);
      //     })
      // );
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather",
          {
            params: citylist,
          },
          {
            headers: {
              // "X-RapidAPI-Key":
              //   "7abd618da1msh25b7e4a8c0ea807p1c3e92jsn224b183ad913",
              // "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
              // "Content-Type": "application/json",
              Accept: "*/*",
              mode: "no-cors",
            },
          }
        );
        setWeatherData(response.data);
        console.log(response.data);
        console.log("Hello Im here in submit action");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    const getCountry = async () => {
      return fetch(`https://countriesnow.space/api/v0.1/countries`).then(
        (response) => response.json().then((data) => setCountrylist(data.data))
      );
    };

    getCountry();
    getWeatherData();
    // fetchAllData();
    // getWeatherInfo();
  }, [setCitylist, citylist]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="App">
      <h1>Fun weather app</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Container fluid>
        <Row>
          <Col>
            <Form className="signup-form">
              <Form.Group>
                <Form.Select onChange={getcountryname}>
                  <option>Select Countries</option>
                  {countrylist.map((item) => (
                    <option href={item.country} key={item.country}>
                      {item.country}{" "}
                    </option>
                  ))}
                </Form.Select>
                <br></br>

                {typeof currentCountry === "object" ? (
                  <Form.Select disabled>
                    <option>No country has been selected</option>
                  </Form.Select>
                ) : (
                  countrylist
                    .filter((arrylist) => arrylist.country === currentCountry)
                    .map((citylist, index) => (
                      <Form.Select
                        as="select"
                        key={index}
                        onChange={getCityName}
                      >
                        {/* <option key="selectcity">Select the city</option> */}
                        {citylist.cities.map((city, i) => (
                          <option key={i} value={city}>
                            {city}
                          </option>
                        ))}
                      </Form.Select>
                    ))
                )}
                <Button
                  onClick={() => {
                    setCitylist({
                      city: currentCity,
                      country: currentCountry,
                    });
                    console.log("paramFrance is been activated");
                  }}
                  // onClick={getWeatherData}
                >
                  Submit
                </Button>
                <br></br>
                <hr></hr>
                <br></br>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setCitylist(paramIran);
                      console.log("paramFrance is been activated");
                    }}
                  >
                    Iran(Tehran)
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      setCitylist(paramFrance);
                      console.log("paramFrance is been activated");
                    }}
                  >
                    PARIS(France)
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      setCitylist(paramDenmark);
                      console.log("paramDenmark is been activated");
                    }}
                  >
                    COPENHAGEN(Denmark)
                  </Button>

                  <Button
                    onClick={() => {
                      setCitylist(paramEngland);
                      console.log("paramEngland is been activated");
                    }}
                  >
                    LONDON(England)
                  </Button>

                  <Button
                    onClick={() => {
                      setCitylist(paramGermany);
                      console.log("paramGermany is been activated");
                    }}
                  >
                    BERLIN(Germany)
                  </Button>
                </ButtonGroup>
                <h1> Your selected country : {currentCountry}</h1>
                <h2>
                  {currentCountry} 's cities : {currentCity}
                </h2>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            {weatherData.length === 0 ? (
              "Nothing to show here"
            ) : (
              <WeatherCards weatherData={weatherData}></WeatherCards>
            )}
          </Col>
        </Row>
        <Row className="mapbox">
          {/* Google map starts from here */}
          <WorldWeatherMap></WorldWeatherMap>
          {/* Google map starts from here */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
