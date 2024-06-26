/*
// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(arr1, arr2) {
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
*/

const flatten = function(nestedArray) {
  let flatArray = nestedArray.flat(2);
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
// TEST CODE
/*
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual([1, 2, 3], [4, 2, 3]);
assertArrayEqual([1, 2, 3], [1, 2, 3,4]);*/