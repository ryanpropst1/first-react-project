const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
let app = express();

// write data form submissions to file
let filePath = path.join(__dirname, "./data.json");

respond with simple text on root
app.get('/', (req, res) => {
    res.send('Hello from the web server side ...');
})

// log url of each root request
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// use body-parser for data - used to make a POST to JSON file
app.use(bodyParser.urlencoded({ extended: false }));

// write data to json file when posted
app.post("/data-form", (req, res) => {
  fs.appendFileSync(
    filePath,
    `{"name": "${req.body.name}", "email": "${req.body.email}"}\n`
  );
  res.send("Data Post to JSON file Complete, Thank you for your submission");
});

// send contents of data json file
app.get("/data", (req, res) => {
  res.sendFile(filePath, err => console.log(err));
});

// serve html & css files using static path for client folder for display
app.use(express.static(path.join(__dirname, "../client")));

app.listen(3000);
