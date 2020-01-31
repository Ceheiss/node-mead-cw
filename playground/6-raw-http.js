const https = require('https');
const url = `https://api.darksky.net/forecast/54ec5d5a02fc39cccf4d656345304869/40,40?units=si&lang=es`;

const request = https.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  })

  response.on('end', () => {
    const body  = JSON.parse(data);
    console.log(body);
  })
})

request.on('error', (error) => {
  console.error(error);
})

request.end();