const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const colors = require("./colors.json");

// const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = 4000;

const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));

const paramDenmark = {
  city: "Copenhagen",
  country: "Denmark",
  iso2: "DK",
};

app.use(cors());

// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "https://weatherappbackend-k6pp.onrender.com/api/weather",
//     changeOrigin: true,
//   })
// );

app.get("/colors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json("hello");
});
// app.get("/colors", (req, res) => {
//   res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.json(colors);
// });

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/user", (req, res) => {
  res.json({ number: 1 });
});

app.get("/colorpics", (req, res) => {
  res.set(
    "Access-Control-Allow-Origin",
    "https://jsonplaceholder.typicode.com/photos"
  );
  res.json({ number: 10 });
  // res.json(colors);
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/testlink", (req, res) => {
  axios
    .get("https://weatherappbackend-k6pp.onrender.com/api/city")
    .then((responses) => {
      res.json(responses.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello World" });
// });

// app.post("/postTrip", (req, res) => {
//   // This fetch is NOT allowed in node js
//   // fetch(`http://api.geonames.org/searchJSON?name=${req.body.tripDest}&username=${GEONAMES_API}`)
//   //         .then(response => res.send(response))
//   //         .catch(error => res.send(`Failed to fetch the place ${error}`))

//   // fetch(`https://restcountries.com/v3.1/name/{countryname}`)
//   //   .then((response) => res.send(response))
//   //   .catch((error) => res.send(`Failed to fetch the place ${error}`));
//   // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   // fetch(`https://countriesnow.space/api/v0.1/countries`)
//   //       .then(response => res.send(response))
//   //       .catch(error => res.send(`Failed to fetch the place ${error}`))
//   axios
//     .get("https://countriesnow.space/api/v0.1/countries")
//     .then((response) => res.json(response))
//     .catch((error) => res.send(`Failed to fetch the place ${error}`));

//   // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   // res.json(colors);
// });

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "https://weatherappbackend-k6pp.onrender.com",
//       changeOrigin: true,
//     })
//   );
// };

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello World" });

//   const getWeatherData = async () => {
//     try {
//       const response = await axios.get("/api/weather", {
//         params: {
//           city: "Copenhagen",
//           country: "Denmark",
//         },
//       });
//       console.log(response.data);
//       res.json(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   };
//   getWeatherData();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
