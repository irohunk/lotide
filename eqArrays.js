// FUNCTION IMPLEMENTATION

// This function takes two arrays as arguments and checks if they are equal.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Export the eqArrays function to be used in other modules.
module.exports = eqArrays;
