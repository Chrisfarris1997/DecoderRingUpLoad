// Write your tests here!
const chai = require('chai');
const assert = chai.assert;
const polybiusModule = require('../src/polybius');

const { polybius } = polybiusModule;

// Encoding test
const encodedMessage = polybius("hello world"); // Expected: "3251131343 2543241341"
console.log(encodedMessage === "3251131343 2543241341"); // Output: true

// Decoding test
const decodedMessage = polybius("3251131343 2543241341", false); // Expected: "HELLO WORLD"
console.log(decodedMessage === "HELLO WORLD"); // Output: true

// Decoding test with preserved spaces
const decodedMessagePreserveSpaces = polybius("2 533315 134341", false); // Expected: "H E(LO) WOR(L)D"
console.log(decodedMessagePreserveSpaces === "H E(LO) WOR(L)D");