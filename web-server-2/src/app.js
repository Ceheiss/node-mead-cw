const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Is 30 degrees",
    locations: "Santiago"
  });
});

app.get("/*", (req, res) => {
  res.send("<h1>404</h1><h2>Page Not Found dude</h2>");
})

app.listen(3000, () => console.log("serving in port 3000"))