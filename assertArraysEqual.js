// Import the eqArrays function from the eqArrays.js module
const eqArrays = require("./eqArrays.js");

// FUNCTION IMPLEMENTATION
// assertArraysEqual function definition
// This function takes two arrays as arguments and prints a message indicating whether they are equal.
const assertArraysEqual = function(arr1, arr2) {
  // Call eqArrays to compare arr1 and arr2 for equality
  let arrResult = eqArrays(arr1, arr2);

  // If eqArrays returns true, log an assertion passed message
  if (arrResult) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    // If eqArrays returns false, log an assertion failed message
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Export the assertArraysEqual function to be used in other modules
module.exports = assertArraysEqual;
