// FUNCTION IMPLEMENTATION

// This function takes two arrays as arguments and checks if they are equal.
const eqArrays = function(arr1, arr2) {
  // First, check if the arrays are of the same length.
  // If they are not, return false immediately as they cannot be equal.
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Initializing result and assume the arrays are equal initially.
  let result = true;
  
  // Loop through each element of the arrays.
  for (let i = 0; i < arr1.length; i++) {
    // Compare the elements at the same index in both arrays.
    // If any pair of elements is not equal, set result to false.
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  // After checking all elements, return the result.
  return result;
};

// Export the eqArrays function to be used in other modules.
module.exports = eqArrays;
