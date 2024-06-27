// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterCount = {};
  for (let letters of sentence) {
    if (letters !== " ") {
      if (letterCount[letters]) {
        letterCount[letters] += 1;
      } else {
        letterCount[letters] = 1;
      }
    }
  }
  return letterCount;
};


// TEST CODE
const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);