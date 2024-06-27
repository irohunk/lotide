// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  objKeys1.sort();
  const objKeys2 = Object.keys(object2);
  objKeys2.sort();

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let i = 0; i < objKeys1.length; i++) {
    if (objKeys1[i] !== objKeys2[i] || object1[objKeys1[i]] !== object2[objKeys2[i]]) {
      return false;
    }
  }
  return true;
};



// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let testObj = eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual((testObj), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
testObj = eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual((testObj), false);
