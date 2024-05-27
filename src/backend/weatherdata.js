const express = require("express");
const cors = require("cors");
// const request = require("request");

const app = express();

// Use the CORS middleware
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/api/weather", (req, res) => {
  // Your existing code
  res.send({
    /* your weather data */
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);
