// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRUnWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    (!error) ? functionToRUnWhenThingsAreDone(data): functionToRUnWhenThingsAreDone(undefined);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

module.exports = breedDetailsFromFile;