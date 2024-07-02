const assert = require('chai').assert;

const tail = require("../tail");

describe("#tail", () => {
  // Individual test cases defined using `it` blocks

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for ["Yo Yo"]', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('does not modify the original array', () => {
    const originalArray = ["Yo Yo", "Lighthouse", "Labs"];
    tail(originalArray);
    assert.deepEqual(originalArray, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});
