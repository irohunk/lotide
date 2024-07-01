// Import assertArraysEqual
const assertArraysEqual = require("../assertArraysEqual");


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [4, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3,4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => should PASS
assertArraysEqual([], []) // => should PASS