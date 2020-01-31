const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h2>Help</h2><p>Hopefully you will be helped</p>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About</h2>");
});

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