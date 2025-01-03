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

// const url =
//   "https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=india&language=en";
// "https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin";
// "https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=37.81021&lon=-122.42282&language=en&units=auto";

// const Weather_API =
//   "https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7abd618da1msh25b7e4a8c0ea807p1c3e92jsn224b183ad913",
//     "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
//     "Content-Type": "application/json",
//     Accept: "*/*",
//   },
// };

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

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [countrylist, setCountrylist] = useState([]);
  const [citylist, setCitylist] = useState({ city: "", country: "", iso2: "" }); // default is set to denmark

  const [currentCity, setCurrentCity] = useState("Not selected"); // should not need this, free this
  const [currentCountry, setCurrentCountry] = useState([]); // should not need this, free this
  // const [userdata, setUserdata] = useState();

  // const getcountryname = (e) => {
  //   // setCountry(e.currentTarget.value);
  //   setCurrentCountry(e.currentTarget.value);
  // };

  // const getCityName = (e) => {
  //   setCurrentCity(e.target.value);
  // };

  const resetfunction = () => {
    console.log("I am in resetfunction");
    setCitylist({
      city: "",
      country: "",
      iso2: "",
    });
  };

  const getWeatherData = async () => {
    // return fetch(`${weatherUrl}q=${"Delhi"}&appid=${API_KEY}`).then(
    //   (response) =>
    //     response.json().then((data) => {
    //       setWeather(data);
    //     })
    // );
    console.log("I have reached to the api");
    if (citylist.country && citylist.city !== "") {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather?country=${citylist.country}&city=${citylist.city}`,
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
        // const response = await axios.get(
        //   "https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather",
        //   {
        //     params: citylist,
        //   },
        //   {
        //     headers: {
        //       // "X-RapidAPI-Key":
        //       //   "7abd618da1msh25b7e4a8c0ea807p1c3e92jsn224b183ad913",
        //       // "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
        //       // "Content-Type": "application/json",
        //       Accept: "*/*",
        //       mode: "no-cors",
        //     },
        //   }
        // );
        //   // data.assign(citylist.iso2);
        response.data.iso2 = citylist.iso2;
        setWeatherData(response.data);
        // console.log(weatherData);
        // console.log(citylist);
        // console.log("Hello Im here in submit action");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    } else {
      console.log("Error in the getWeatherData function");
    }
  };

  // console.log(countrylist); // data of all the countries : name, cities, iso
  // console.log(weatherData); // weatherdata of selected country
  // console.log(citylist); // citydata of current country : countryname, cityname, iso2

  useEffect(() => {
    //   const getCountry = async () => {
    //       return fetch(`https://restcountries.com/v3.1/all?fields=name,flags`).then((response) => response.json().then(data => setCountrylist(data)));
    // }

    const getCountry = async () => {
      return fetch(`https://countriesnow.space/api/v0.1/countries`).then(
        (response) => response.json().then((data) => setCountrylist(data.data))
      );
    };

    getCountry();
    getWeatherData();
    // fetchAllData();
    // getWeatherInfo();
  }, [citylist]); //citylist, weatherData

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
      <Container fluid>
        <Row>
          <Col>
            <Form className="signup-form">
              <Row>
                {/* <Form.Group> */}
                <Col>
                  <Form.Select
                    // onChange={getcountryname}
                    onChange={(e) => {
                      setCurrentCountry(e.target.value);
                    }}
                  >
                    <option>Select Countries</option>
                    {countrylist.map((item) => (
                      <option href={item.country} key={item.iso2}>
                        {item.country}{" "}
                      </option>
                    ))}
                  </Form.Select>
                  {/* <br></br> */}
                </Col>
                <Col>
                  {typeof currentCountry === "object" ? (
                    <Form.Select disabled>
                      <option>No country has been selected</option>
                    </Form.Select>
                  ) : (
                    countrylist
                      .filter((arrylist) => arrylist.country === currentCountry)
                      .map((citieslist, index) => (
                        <Form.Select
                          as="select"
                          key={index}
                          // onChange={getCityName}
                          onChange={(e) => {
                            setCurrentCity(e.target.value);
                          }}
                        >
                          {/* <option key="selectcity">Select the city</option> */}
                          {citieslist.cities.map((city, i) => (
                            <option key={i} value={city}>
                              {city}
                            </option>
                          ))}
                        </Form.Select>
                      ))
                  )}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Button
                  onClick={() => {
                    const currentcountryisodata = countrylist.filter(
                      (Clist) => Clist.country === currentCountry
                    );

                    setCitylist({
                      country: currentCountry,
                      city: currentCity,
                      iso2: currentcountryisodata[0].iso2,
                    });
                    console.log("Submit button is been activated");
                    getWeatherData();
                  }}
                  // onClick={getWeatherData}
                >
                  Submit
                </Button>
                <Button
                  onClick={() => {
                    resetfunction();

                    console.log("Clear button is activated");
                  }}
                >
                  Clear button
                </Button>
              </Row>
              <hr></hr>
              <Row>
                {weatherData.length === 0 ? (
                  "Nothing to show here"
                ) : (
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        debugger;
                        setCitylist(paramIran);
                        console.log("paramIran is been activated");
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
                )}
                {/* <h1> Your selected country : {currentCountry}</h1>
                <h2>
                  {currentCountry} 's cities : {currentCity}
                </h2> */}
                {/* </Form.Group> */}
              </Row>
            </Form>
          </Col>
          <Col>
            {weatherData.length === 0 || citylist.length === 0 ? (
              "Nothing to show here"
            ) : (
              <WeatherCards weatherData={weatherData}></WeatherCards>
            )}
          </Col>
        </Row>
        <Row className="mapbox">
          <Col>
            <div
              style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
            {/* Google map starts from here */}

            {/* {weatherData.length === 0 ? (
              <div
                style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <WorldWeatherMap currentcity={weatherData}></WorldWeatherMap>
            )} */}
          </Col>
          {/* Google map ends here */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
