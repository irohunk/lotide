// calling assertEqual function
const assertEqual = require("../assertEqual");

// calling eqArray function
const eqArrays = require("../eqArrays");


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [4, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), false); // => should PASS