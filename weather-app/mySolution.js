const forescastByName = (city, callback) => {
  geocode(city, (error, data) => {
    if (error) {
      callback('Error!');
    } else {
      const latitude = data.latitude;
      const longitude = data.longitude;
      forecast(latitude, longitude, (error, data) => {
        if (error) {
          callback('Error!!');
        } else {
          callback(null, `In ${city}: ${data}`);
        }
      })
    }
  });
}

forescastByName('Santiago', (error, data) => {
  if (error) {
    console.log('SUPER ERROR: ', error);
  } else {
    console.log('SUPER DATA: ', data);
  }
})