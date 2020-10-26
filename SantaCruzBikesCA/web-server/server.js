const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

// app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(process.cwd() + '/bike-store/dist/bike-store'))

// simple route
// app.get("/", (req, res) => {
//     //res.json({ message: "Welcome to DistributedBikes application." });
//     res.sendFile(process.cwd()+'/bike-store/dist/bike-store/index.html');
// });

require("./routes/routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});