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

const middle = function(arr) {
  let middleArrayValue = [];
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    middleArrayValue.push(arr[Math.floor(arr.length / 2)]);
    return middleArrayValue;
  }
  middleArrayValue.push(arr[Math.floor(arr.length / 2) - 1]);
  middleArrayValue.push(arr[Math.ceil(arr.length / 2)]);
  return middleArrayValue;
};

// TEST CODE
assertArrayEqual(middle([1, 2]), []); // => should PASS
assertArrayEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
