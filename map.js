// function to display the results of array checks
const assertArraysEqual = function(arr1, arr2) {
  let arrResult = eqArrays(arr1, arr2);

  if (arrResult) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// function to check of both arrays are the equal
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

// implement map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE 1 - get 1st character of each word
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => should PASS

// TEST CODE 2 - get length of each word
const results2 = map(words, (word) => word.length);
console.log(results2);

assertArraysEqual(results2, [6, 7, 2, 5, 3]); // => should PASS

// TEST CODE 3 - convert to upper case
const results3 = map(words, (word) => word.toUpperCase());
console.log(results3);

assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); // => should PASS
