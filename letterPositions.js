// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  let arrResult = eqArrays(arr1, arr2);

  if (arrResult) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if(!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};


// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);