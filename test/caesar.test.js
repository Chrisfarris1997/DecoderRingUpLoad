// Write your tests here!
const chai = require('chai');
const assert = chai.assert;
const caesarModule = require('../src/caesar'); // Update the path accordingly

describe('Caesar Cipher', function () {
  it('should encode correctly', function () {
    const input = 'hello world';
    const shift = 3;
    const expectedOutput = 'khoor zruog';
    const encodedOutput = caesarModule.caesar(input, shift);

    assert.strictEqual(encodedOutput, expectedOutput);
  });

  it('should decode correctly', function () {
    const input = 'khoor zruog';
    const shift = 3;
    const expectedOutput = 'hello world';
    const decodedOutput = caesarModule.caesar(input, shift, false);

    assert.strictEqual(decodedOutput, expectedOutput);
  });

  it('should handle non-alphabetic characters', function () {
    const input = 'hello, 123!';
    const shift = 5;
    const expectedOutput = 'mjqqt, 123!';
    const encodedOutput = caesarModule.caesar(input, shift);

    assert.strictEqual(encodedOutput, expectedOutput);
  });

  it('should handle large positive shift values', function () {
    const input = 'abc';
    const shift = 30;
    const expectedOutput = false;
    const encodedOutput = caesarModule.caesar(input, shift);

    assert.strictEqual(encodedOutput, expectedOutput);
  });

  it('should handle large negative shift values', function () {
    const input = 'efg';
    const shift = -30;
    const expectedOutput = false;
    const decodedOutput = caesarModule.caesar(input, shift, false);

    assert.strictEqual(decodedOutput, expectedOutput);
  });

  it('should return false for invalid shift values', function () {
    const input = 'hello world';
    const shift = 100; // Invalid shift value
    const output = caesarModule.caesar(input, shift);

    assert.isFalse(output);
  });
});