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

const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flatArray = flatArray.concat(nestedArray[i]);
    } else {
      flatArray.push(nestedArray[i]);
    }
  }
  console.log(flatArray);
  return flatArray;
};


// TEST CODE
assertArrayEqual(flatten([1, [2, 3]]), [1, 2, 3]); // => should PASS
assertArrayEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);