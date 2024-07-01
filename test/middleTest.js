// Import the 'assert' module from 'chai' for assertion functions
const assert = require('chai').assert;

// Import middle function from '../middle.js'
const middle = require("../middle.js");

// TEST CODE using Mocha and Chai
describe("#middle", () => {
  // Individual test cases defined using `it` blocks

  // Test case: returns [] for [1, 2]
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []); // Assertion: Check if middle([1, 2]) returns []
  });

  // Test case: returns [2] for [1, 2, 3]
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // Assertion: Check if middle([1, 2, 3]) returns [2]
  });

  // Test case: returns [2, 3] for [1, 2, 3, 4]
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // Assertion: Check if middle([1, 2, 3, 4]) returns [2, 3]
  });

  // Test case: returns [3] for [1, 2, 3, 4, 5]
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); // Assertion: Check if middle([1, 2, 3, 4, 5]) returns [3]
  });

  // Test case: returns [3, 4] for [1, 2, 3, 4, 5, 6]
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Assertion: Check if middle([1, 2, 3, 4, 5, 6]) returns [3, 4]
  });
});
