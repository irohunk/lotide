// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let splitSentence = sentence.split("");
  let LetterCount = {};
  for (let letters of splitSentence) {
    if (letters !== " ") {
      if (LetterCount[letters]) {
        LetterCount[letters] += 1;
      } else {
        LetterCount[letters] = 1;
      }
    }
  }
  return LetterCount;
};


// TEST CODE
const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);