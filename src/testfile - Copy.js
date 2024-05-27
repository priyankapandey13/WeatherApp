// const { createServer } = require("node:http");

// /new code starts from here/
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:3000",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.listen("4000", () => {
  console.log("Listening on port 4000");
});

app.get("/number", (req, res) => {
  res.json({ number: 1 });
});
// /new code ends here/

// const hostname = "127.0.0.1";
// const port = 4000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
