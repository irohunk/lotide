// Import the 'assert' module from 'chai' for assertion functions
const assert = require('chai').assert;
// Import the 'head' function from the local module '../head'
const head   = require('../head');

// Describe block defines a suite of tests for the 'head' function
describe("#head", () => {
  // It block defines an individual test case
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  // Test case for an array with a single string element
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  // Test case for an array with multiple number elements
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  // Test case for an array with multiple string elements
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  // Test case for an empty array
  it("returns null for []", () => {
    assert.strictEqual(head([]), null);
  });
});