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

const paramFrance = {
  city: "Paris",
  country: "france",
  iso2: "FR",
};
const paramIran = {
  city: "Tehran",
  country: "Iran",
  iso2: "IR",
};
const paramDenmark = {
  city: "Copenhagen",
  country: "Denmark",
  iso2: "DK",
};
const paramEngland = {
  city: "London",
  country: "England",
  iso2: "GB",
};
const paramGermany = {
  city: "Berlin",
  country: "Germany",
  iso2: "DE",
};

const refreshdropdown = () => {
  // const bothdropdowns = document.getElementsByClassName('form-select');
  // bothdropdowns.addEventListener('change', better);
  // document.getElementsByClassName("form-select").addEventListener("change", addActivityItem, false)
};

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [countrylist, setCountrylist] = useState([]);
  const [citylist, setCitylist] = useState(
    // default is set to denmark
    {
      city: "Copenhagen",
      country: "Denmark",
      iso2: "DK",
    }
  );
  const [currentCity, setCurrentCity] = useState("Not selected"); // should not need this, free this
  const [currentCountry, setCurrentCountry] = useState([]); // should not need this, free this
  // const [userdata, setUserdata] = useState();

  const getcountryname = (e) => {
    // setCountry(e.currentTarget.value);
    setCurrentCountry(e.currentTarget.value);
  };
  const getCityName = (e) => {
    setCurrentCity(e.target.value);
  };

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://weatherappbackend-k6pp.onrender.com/api/weather?country=${citylist.country}&city=${citylist.city}`,

          // `https://weatherappbackend-k6pp.onrender.com/api/city`,
          {
            mode: "cors",
          }
        );
        const alldata = await response;
        // `https://weatherappbackend-k6pp.onrender.com/api/weather?country=Denmark&city=Copenhagen`
        // `https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather?country=${citylist.country}&city=${citylist.city}`,

        setWeatherData(alldata.data);

        // return response.data;
      } catch (e) {
        if (e) {
          e.response.status === 404 && setWeatherData([]);
        }
        // console.log(e.response.status);
        console.log(e.message);
        // console.log(e);
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
  }, [setCitylist, citylist]); //citylist, weatherData

  console.log(weatherData);
  // console.log(weatherData);
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
      <br></br>
      <hr></hr>
      <br></br>
      <Container fluid>
        <Row>
          <Col>
            <Form className="signup-form" id="signup-form">
              {weatherData && <div>{JSON.stringify(weatherData.cities)}</div>}
              <Form.Group>
                <Form.Select
                  className="selectCountry"
                  onChange={getcountryname}
                >
                  <option>Select Countries</option>
                  {countrylist.map((item) => (
                    <option href={item.country} key={item.iso2}>
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
                        className="selectCity"
                      >
                        <option key="selectcity">Select the city</option>
                        {citylist.cities.map((city, i) => (
                          <option key={i} value={city}>
                            {city}
                          </option>
                        ))}
                      </Form.Select>
                    ))
                )}
                <Button
                  onClick={(e) => {
                    setCitylist({
                      city: currentCity,
                      country: currentCountry,
                    });
                    console.log(
                      `setCitylist is been assigned, currentCountry : ${currentCountry}, currentCity : ${currentCity} `
                    );

                    // add event listner or some action to empty both dropdown boxes. Right now only firdst one is working
                    // right now i added classname to both drop boxes to control their action's only. these classes doesnt do
                    // anything else.

                    // e.preventDefault();

                    // const formToReset = document.getElementById("signup-form");
                    // formToReset.addEventListener("submit", (e) => {
                    //   e.preventDefault();
                    //   formToReset.reset();
                    // });
                    const selectObj = document.querySelector(
                      "#signup-form select"
                    );
                    selectObj.selectedIndex = 0;
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
              </Form.Group>
            </Form>
          </Col>

          <Col>
            {weatherData.length === 0 && (
              <>
                <h2>
                  {" "}
                  Your selected {currentCity} in {currentCountry}
                </h2>
                <h4>
                  Unfortunately we dont have data for {currentCountry} right
                  now.
                </h4>
              </>
            )}

            {/* 
              <>
                <h1> Your selected country : {currentCountry}</h1>
                <h2>
                  {currentCountry} cities : {currentCity}
                </h2>
              </>
            ) */}

            {/* <>
                <h1> Your selected country : {currentCountry}</h1>
                <h2>
                  {currentCountry} 's cities : {currentCity}
                </h2>
              </> */}

            {weatherData.length === 0 ? (
              "Nothing to show here"
            ) : (
              <WeatherCards weatherData={weatherData}></WeatherCards>
            )}
          </Col>
        </Row>
        {/* Google map starts from here */}
        {/* <Row className="mapbox">
          <WorldWeatherMap currentcity={weatherData}></WorldWeatherMap>
        </Row> */}
        {/* Google map starts from here */}
      </Container>
    </div>
  );
};

export default App;
