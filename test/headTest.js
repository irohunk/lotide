// calling assertEqual function
const assertEqual = require("../assertEqual");

// calling head function
const head = require("../head");

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([5]), 5);