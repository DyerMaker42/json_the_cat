const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  //const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }


    const data = JSON.parse(body);
    
    let breed = data[0];

    if (!breed) {
      callback("Sorry homie no breed like that", null);
    } else {
      callback(null, breed.description);
    }
  });

};

module.exports = { fetchBreedDescription };