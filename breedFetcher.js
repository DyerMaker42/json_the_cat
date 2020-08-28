const request = require('request');
const input = process.argv.slice(2);
const breed = input;

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (error, response, body) => {
  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0]["description"]);
  } else if (error !== undefined) {
    console.log("Sorry we could not find that breed, please try again");
    
  }




});