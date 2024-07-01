// FUNCTION IMPLEMENTATION
// middle function definition
// This function takes an array as an argument and returns the middle element(s).
const middle = function(arr) {
  // Initialize an empty array to hold the middle value(s)
  let middleArrayValue = [];
  
  // If the array has 2 or fewer elements, there is no middle, return an empty array
  if (arr.length <= 2) {
    return [];
  }
  
  // If the array has an odd number of elements, return the single middle element
  if (arr.length % 2 !== 0) {
    // Calculate the middle index and push the middle element into middleArrayValue
    middleArrayValue.push(arr[Math.floor(arr.length / 2)]);
    return middleArrayValue;
  }
  
  // If the array has an even number of elements, return the two middle elements
  let middleIndex = arr.length / 2;
  // Push the two middle elements into middleArrayValue
  middleArrayValue.push(arr[middleIndex - 1]);
  middleArrayValue.push(arr[middleIndex]);
  return middleArrayValue;
};

// Export the middle function to be used in other modules
module.exports = middle;
