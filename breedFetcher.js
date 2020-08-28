const request = require('request');

const breed = 'sibe';

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (error, response, body) => {
  const data = JSON.parse(body)
  if (error) {
    console.log('log the error', error);
    return;
  }
  console.log(data[0]["description"], typeof data);

});