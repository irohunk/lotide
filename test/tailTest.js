// import assertEqual function
const assertEqual = require("../assertEqual");

// import head function
const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, words.length - 1);

for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], words[i + 1]);
}

//Test Case: Single element array
const words1 = ["Yo Yo"];
const result1 = tail(words1);
assertEqual(result1.length, words1.length - 1);

for (let i = 0; i < result1.length; i++) {
  assertEqual(result1[i], words1[i + 1]);
}


// Test Case: Empty array
const words2 = [];
const result2 = tail(words2);
assertEqual(result2.length, words2.length - 1);

for (let i = 0; i < result2.length; i++) {
  assertEqual(result2[i], words2[i + 1]);
}