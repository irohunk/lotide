// Import the 'assert' module from 'chai' for assertion functions
const assert = require('chai').assert;

// import tail function from '../tail'
const tail = require("../tail");

// TEST CODE using Mocha and Chai
describe("#tail", () => {
  // Individual test cases defined using `it` blocks

  // Test case: returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    // Assertion: Check if tail(["Yo Yo", "Lighthouse", "Labs"]) returns ["Lighthouse", "Labs"]
  });

  // Test case: returns [] for ["Yo Yo"]
  it('returns [] for ["Yo Yo"]', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
    // Assertion: Check if tail(["Yo Yo"]) returns []
  });

  // Test case: returns [] for []
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
    // Assertion: Check if tail([]) returns []
  });

  it('does not modify the original array', () => {
    const originalArray = ["Yo Yo", "Lighthouse", "Labs"];
    tail(originalArray);
    assert.deepEqual(originalArray, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});
