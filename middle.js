// FUNCTION IMPLEMENTATION
// middle function definition
// This function takes an array as an argument and returns the middle element(s).
const middle = function(arr) {
  let middleArrayValue = [];
  
  if (arr.length <= 2) {
    return [];
  }
  
  if (arr.length % 2 !== 0) {
    middleArrayValue.push(arr[Math.floor(arr.length / 2)]);
    return middleArrayValue;
  }
  
  let middleIndex = arr.length / 2;
  middleArrayValue.push(arr[middleIndex - 1]);
  middleArrayValue.push(arr[middleIndex]);
  return middleArrayValue;
};

// Export the middle function to be used in other modules
module.exports = middle;
