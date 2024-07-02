# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @irohunk/lotide`

**Require it:**

`const _ = require('@irohunk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual = function(arr1, arr2)`: takes 2 arrays as arguments and returns if they are equal or not.
- `assertEqual = function(actual, expected)`: takes 2 values are arguments and returns if they are equal or not.
- `assertObjectsEqual = function(actual, expected)`: takes 2 objects are arguments and returns if they are equal or not.
- `countLetters = function(sentence)`: takes a string as arguments and gives the count of a letter.
- `countOnly = function (allItems, itemsToCount)`: takes an array and item to count as arguments and gives the count of the item.
- `eqArrays = function(arr1, arr2)`: this function takes 2 arrays as arguments and checks if they are equal.
- `eqObjects = function(object1, object2)`: takes 2 objects as arguments and checks if both are equal.
- `findKey = function(object, callback)`: takes an object and callback as arguments and returns the key based on input conditions.
- `findKeyByValue = function(object, key)`: similar to findKey but returns the value of the object.
- `flatten = function(nestedArray)`: takes a nested array as input and flattens it [removes the nest].
- `head = function(inpArr)`: takes an array as argument and returns its head [1st element].
- `letterPositions = function(sentence)`: takes a string as argument and returns the position of the required letter.
- `map = function(array, callback)`: takes an array and callback as arguments and returns the required output based on input condition.
- `middle = function(arr)`: takes an array as argument and returns the middle value in case of odd count or middle 2 values in case of even counts.
- `tail = function(inpArr)`: takes an array as argument and returns all values except the 1st [index 0].
- `takeUntil = function(array, callback)`: takes an array and callback as arguments and returns all values until the conditiopn is reached.
- `without = function(arr1, arr2)`: takes 2 arrays as inputs and returns all the values of array1 without the values of array2.