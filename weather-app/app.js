const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv.length > 2) {
  const enteredLocation = process.argv[2];
  geocode(enteredLocation, (error, { latitude, longitude, location }) => {
    if (error) {
      console.log("Error", error);
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return console.log("Error", error);
        } else {
          return console.log(`In ${location}: ${forecastData}`);
        }
      });
    }
  });
} else {
  console.log("Please enter the name of a city next time")
}
