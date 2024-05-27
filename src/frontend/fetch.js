import { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [colors, setColors] = useState();
  const [colorpics, setColorpics] = useState("");
  const [weather, setWeather] = useState("");

  const [data, setData] = useState(null);

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const API_BASE_URL =
  //   "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=france"; // Replace with your friend's API base URL

  const getColors = async () => {
    const response = await fetch("http://localhost:5000/colors");
    const data = await response.json();
    console.log({ data });
    setColors(data);
  };
  const getUser = async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json();
    console.log({ data });
  };

  const getColorpics = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log({ data });
    console.log("I reached here");
    setColorpics(data);
  };

  const getWeather_old = async () => {
    fetch(
      "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=France",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "your-api-key",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const getWeatherssss = async () => {
    const response = await fetch(
      "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=France"
    );
    const data = await response.json();
    console.log({ data });
    console.log("I reached here");
    setWeather(data);
  };

  // useEffect(() => {
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://weatherappbackend-k6pp.onrender.com/api/weather",
        {
          params: {
            city: "Paris",
            country: "france",
          },
        }
      );
      setData(response.data);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  //   getWeatherData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}`); // Replace 'endpoint' with the actual endpoint
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the <b>colors app! 🌈</b>
        </p>
        <button onClick={getColors}>Get Colors!</button>
        <br />
        <button onClick={getUser}>Get User</button>
        <p>{colors && JSON.stringify(colors)}</p>
        <br />
        <br />
        <button onClick={getColorpics}>Get colorpics</button>
        <div
          height="100px"
          width="100%"
          style={{
            backgroundColor: "lightblue",
            height: "300px",
            overflow: "hidden",
          }}
        >
          {/* {colorpics === ""
            ? "Nothing to show here"
            : colorpics.map((thumbimg) => (
                <img
                  src={thumbimg.thumbnailUrl}
                  alt="thumbimg.title"
                  key={thumbimg.id}
                ></img>
              ))} */}
          {colorpics && JSON.stringify(colorpics)}
        </div>

        <button onClick={getWeatherData}>Get weather</button>
        {/* <p>
          {weather === ""
            ? "Nothing to show here"
            : weather && JSON.stringify(weather)}
        </p> */}
        {/* <p>{JSON.stringify(data, null, 2)}</p> */}
        <p>{JSON.stringify(data)}</p>
        <p>
          {/* {weather === "undefined"
            ? weather.map((thumbimg) => (
                <img
                  src={thumbimg.thumbnailUrl}
                  alt="thumbimg.title"
                  key={thumbimg.id}
                ></img>
              ))
            : console.log("nothing to show here")} */}
        </p>
      </header>
    </div>
  );
}
export default Fetch;
