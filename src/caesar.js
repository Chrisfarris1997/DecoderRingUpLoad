// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  // Check if the shift value is valid
  if (!shift || shift < -25 || shift > 25) {
    return false;
  }

  // Define the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Convert the input to lowercase for case insensitivity
  const lowercaseInput = input.toLowerCase();

  let result = '';

  for (let i = 0; i < lowercaseInput.length; i++) {
    const currentChar = lowercaseInput[i];
    let shiftedIndex;

    if (currentChar === ' ') {
      result += ' '; // Maintain spaces
      continue;
    } else if (!alphabet.includes(currentChar)) {
      result += currentChar; // Maintain non-alphabetic symbols
      continue;
    } else {
      const currentIndex = alphabet.indexOf(currentChar);
      if (encode) {
        shiftedIndex = (currentIndex + shift) % 26;
        if (shiftedIndex < 0) {
          shiftedIndex += 26; // Wrap around to the end of the alphabet
        }
      } else {
        shiftedIndex = (currentIndex - shift) % 26;
        if (shiftedIndex < 0) {
          shiftedIndex += 26; // Wrap around to the beginning of the alphabet
        }
      }
      result += alphabet[shiftedIndex];
    }
  }

  return result;
}


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
