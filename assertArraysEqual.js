// Import the eqArrays function from the eqArrays.js module
const eqArrays = require("./eqArrays.js");

// FUNCTION IMPLEMENTATION
// assertArraysEqual function definition
// This function takes two arrays as arguments and prints a message indicating whether they are equal.
const assertArraysEqual = function(arr1, arr2) {
  let arrResult = eqArrays(arr1, arr2);

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Export the assertArraysEqual function to be used in other modules
module.exports = assertArraysEqual;
