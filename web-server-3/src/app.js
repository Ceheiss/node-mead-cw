const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: "Cristobal"
  });
});

app.get("/about", (req, res) => {
  res.render('about', {
    title: 'About',
    name: "Cristobal"
  });
});

app.get("/help", (req, res) => {
  res.render('help', {
    title: 'Help',
    name: "Cristobal",
    message: 'we are here to help!!!'
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Is 30 degrees",
    locations: "Santiago"
  });
});

app.get("/help/*", (req, res) => {
  res.render('404', {
    title: "Help",
    name: "Cristobal",
    errorMessage: "article not found"
  });
});

app.get("/*", (req, res) => {
  res.render('404', {
    title: "404",
    name: "Cristobal",
    errorMessage: "page not found in this server" 
  });
});

app.listen(3000, () => console.log("serving in port 3000"));