const assert = require('chai').assert;

const middle = require("../middle.js");

describe("#middle", () => {
  // Individual test cases defined using `it` blocks

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []); // Assertion: Check if middle([1, 2]) returns []
  });

  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // Assertion: Check if middle([1, 2, 3]) returns [2]
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // Assertion: Check if middle([1, 2, 3, 4]) returns [2, 3]
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); // Assertion: Check if middle([1, 2, 3, 4, 5]) returns [3]
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Assertion: Check if middle([1, 2, 3, 4, 5, 6]) returns [3, 4]
  });

  it('does not modify the original array', () => {
    const originalArray = [1, 2, 3];
    middle(originalArray);
    assert.deepEqual(originalArray, [1, 2, 3]);
  });
});
