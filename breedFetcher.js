const request = require('request');

const breed = 'sibe';

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (error, response, body) => {
  
  if (error) {
    console.log('log the error', error);
    return;
  }
  console.log(body);

});