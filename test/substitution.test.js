const chai = require('chai');
const assert = chai.assert;
const substitutionModule = require('../src/substitution'); // Update the path accordingly

describe('Substitution Cipher', function () {
  it('should encode correctly', function () {
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expectedOutput = 'svool dliow';
    const encodedOutput = substitutionModule.substitution(input, alphabet);

    assert.strictEqual(encodedOutput, expectedOutput);
  });

  it('should decode correctly', function () {
    const input = 'svool dliow';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expectedOutput = 'hello world';
    const decodedOutput = substitutionModule.substitution(input, alphabet, false);

    assert.strictEqual(decodedOutput, expectedOutput);
  });

  it('should handle spaces', function () {
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expectedOutput = 'svool dliow';
    const encodedOutput = substitutionModule.substitution(input, alphabet);

    assert.strictEqual(encodedOutput, expectedOutput);
  });

  it('should return false for invalid alphabets', function () {
    const input = 'hello world';
    const alphabet = 'abcde'; // Invalid alphabet length
    const output = substitutionModule.substitution(input, alphabet);

    assert.isFalse(output);
  });

  it('should return false for non-unique alphabets', function () {
    const input = 'hello world';
    const alphabet = 'abcdeabcdeabcdeabcdeabcdeab'; // Non-unique alphabet
    const output = substitutionModule.substitution(input, alphabet);

    assert.isFalse(output);
  });
});// Write your tests here!
