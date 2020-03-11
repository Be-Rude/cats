const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(data);
  if (error) callback(undefined);
  })
};
 
// const catInfo = breedDetailsFromFile('Bombay', (data) => {
// console.log('Return Value: ', data); 
// });

module.exports =  breedDetailsFromFile;