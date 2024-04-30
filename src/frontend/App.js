import { useState, useEffect } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  DropdownButton,
  Dropdown,
  FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "4c030262d17b5f16a57f1a288881aabb";
// https://dummyjson.com/products
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const countryUrl = "https://restcountries.com/v3.1/all?fields=name,flags`";

let cityname;

let leti = 28.6667;
let longi = 77.2167;

function App() {
  const [weather, setWeather] = useState([]);
  const [countrylist, setCountrylist] = useState([]);
  const [citylist, setCitylist] = useState([]);

  const [currentCity, setCurrentCity] = useState("Not selected");

  const [currentCountry, setCurrentCountry] = useState([]);

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
  }, []);

  // console.log(weather);

  const getcountryname = (e) => {
    // setCountry(e.currentTarget.value);
    setCurrentCountry(e.currentTarget.value);

    // console.log(country); //india iso2
    // strategy --------- ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // call country api     (done)
    // get the get their cities name based on the country selection (partially done)
    // call iso2 for shortname ex : for india IN
    // call another api and match the Iso2 in their api and get the data.

    // countrylist.map(cities => )
  };
  console.log(currentCountry);
  // console.log(typeof(currentCountry));
  // console.log(countrylist);

  const getweather = (e) => {
    // alert('Hello there');
    // console.log(params);

    const getData = async () => {
      return fetch(`${weatherUrl}q=${"Delhi"}&appid=${API_KEY}`).then(
        (response) =>
          response.json().then((data) => {
            setWeather(data);
          })
      );
    };
    getData();
  };

  const getCityName = (e) => {
    setCurrentCity(e.target.value);
  };

  // console.log(weather, weather.type);
  // console.log(weather.name);

  return (
    <div className="App">
      <h1>Fun weather app</h1>
      {/* {posts.map(item => <h1>item.name</h1>)} */}
      {/* <h1>Hello : {weather.name}</h1> */}
      <Container fluid>
        <Row>
          <Col>.</Col>
          <Col>
            <Form className="signup-form">
              <Form.Group>
                {/* <Form.Control className="name-input" type="text" placeholder="name" name="name"></Form.Control>
                    <Form.Control className="email-input" type="text" placeholder="email" name="email" ></Form.Control>
                    <Button className="submit-button" value="submit" type="submit">submit</Button> */}

                {/* <h1>Hello : {country.map(item => console.log(item.name.common))}</h1> */}
                {/* <DropdownButton id="dropdown-basic-button" title="Country">
          {country.map(item => <Dropdown.Item href={(item.name.common)}>{(item.name.common)} </Dropdown.Item>)}
          </DropdownButton>
          
          <DropdownButton id="dropdown-basic-button" title="Cities">
            <Dropdown.Item href="#/action-1">City01</Dropdown.Item>
            <Dropdown.Item href="#/action-2">City02</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton> */}

                <Form.Select
                  aria-label="Default select example"
                  onChange={getcountryname}
                >
                  <option>Select Countries</option>
                  {countrylist.map((item) => (
                    <option href={item.country} key={item.country}>
                      {item.country}{" "}
                    </option>
                  ))}
                </Form.Select>
                <br></br>

                {typeof currentCountry === "object" ? (
                  <Form.Select aria-label="Default select example">
                    <option>No country has been selected</option>
                  </Form.Select>
                ) : (
                  countrylist
                    .filter((arrylist) => arrylist.country === currentCountry)
                    .map((citylist) => (
                      <Form.Select
                        aria-label="Default select example"
                        onChange={getCityName}
                      >
                        <option>Select the city</option>
                        {citylist.cities.map((city) => (
                          <option href={city} key={city}>
                            {" "}
                            {city}
                          </option>
                        ))}
                      </Form.Select>
                    ))
                )}
                <Button>Submit</Button>
                <br></br>
                <hr></hr>
                <br></br>

                <h1> Your selected country : {currentCountry}</h1>
                <h2>
                  {" "}
                  {currentCountry} 's cities : {currentCity}
                </h2>
              </Form.Group>
            </Form>
          </Col>
          <Col>.</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
