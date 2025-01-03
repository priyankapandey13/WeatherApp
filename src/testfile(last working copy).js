const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const colors = require("./colors.json");

const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = 5000;

// const options = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(options));
const paramDenmark = {
  city: "Copenhagen",
  country: "Denmark",
  iso2: "DK",
};

// app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://weatherappbackend-k6pp.onrender.com/api/weather",
    changeOrigin: true,
  })
);

// app.use(
//   cors({
//     // origin: "https://jsonplaceholder.typicode.com/photos",
//     // "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=France",
//   })
// );
// app.get('/colors',cors(),(req,res)=>{
//   res.json(colors)
// })

// app.get("/", (req, res) => {
//   console.log(colors);
//   res.send("Welcome to NodeJS + Express CORS Server! 🎈");
// });

app.get("/colors", (req, res) => {
  // You can specify the value of this property to be * for any origin or website to access the API. As a result, when the browser sees this value, it allows the website to access the resource from the API regardless of its domain or origin.
  // res.set("Access-Control-Allow-Origin", "*");

  // if you want only users from a certain origin to access your APIs, you can set a specific value to this property. This approach is more suited for the use case where you want to enable CORS for different environments.
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(colors);
});

app.get("/user", (req, res) => {
  // You can specify the value of this property to be * for any origin or website to access the API. As a result, when the browser sees this value, it allows the website to access the resource from the API regardless of its domain or origin.
  // res.set("Access-Control-Allow-Origin", "*");

  // if you want only users from a certain origin to access your APIs, you can set a specific value to this property. This approach is more suited for the use case where you want to enable CORS for different environments.
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ number: 1 });
  // res.json(colors);
});

app.get("/colorpics", (req, res) => {
  // You can specify the value of this property to be * for any origin or website to access the API. As a result, when the browser sees this value, it allows the website to access the resource from the API regardless of its domain or origin.
  // res.set("Access-Control-Allow-Origin", "*");

  // if you want only users from a certain origin to access your APIs, you can set a specific value to this property. This approach is more suited for the use case where you want to enable CORS for different environments.
  res.set(
    "Access-Control-Allow-Origin",
    "https://jsonplaceholder.typicode.com/photos"
  );
  // res.json({ number: 1 });
  // res.json(colors);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/postTrip", (req, res) => {
  // This fetch is NOT allowed in node js
  // fetch(`http://api.geonames.org/searchJSON?name=${req.body.tripDest}&username=${GEONAMES_API}`)
  //         .then(response => res.send(response))
  //         .catch(error => res.send(`Failed to fetch the place ${error}`))

  // fetch(`https://restcountries.com/v3.1/name/{countryname}`)
  //   .then((response) => res.send(response))
  //   .catch((error) => res.send(`Failed to fetch the place ${error}`));
  // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  // fetch(`https://countriesnow.space/api/v0.1/countries`)
  //       .then(response => res.send(response))
  //       .catch(error => res.send(`Failed to fetch the place ${error}`))
  axios
    .get("https://countriesnow.space/api/v0.1/countries")
    .then((response) => res.json(response))
    .catch((error) => res.send(`Failed to fetch the place ${error}`));

  // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.json(colors);
});

// app.get("/weather", (req, res) => {
//   // You can specify the value of this property to be * for any origin or website to access the API. As a result, when the browser sees this value, it allows the website to access the resource from the API regardless of its domain or origin.
//   // res.set("Access-Control-Allow-Origin", "*");

//   // if you want only users from a certain origin to access your APIs, you can set a specific value to this property. This approach is more suited for the use case where you want to enable CORS for different environments.
//   // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//   // res.set("Access-Control-Allow-Origin", "*");
//   // res.set(
//   //   "Access-Control-Allow-Origin",
//   //   "https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=France"
//   // );

// });

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || options.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));

// fetch("http://url",{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
// .then(res=> res.json())
// .then(res=>{console.log("ImageUrl: ", res);})
// .catch(error => console.log(error))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.get("/user", async (req, res) => {
//   const response = await axios.get("http://localhost:8080/user");
//   res.json(response.data);
// });

// app.listen("8080", () =>
//   console.log("CORS Disabled Server is Up and Running...")
// );
