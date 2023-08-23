// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  // Check if the alphabet parameter is valid
  if (!isValidAlphabet(alphabet)) {
    return false;
  }

  // Create the standard alphabet for reference
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  // Convert the input to lowercase for case insensitivity
  const lowercaseInput = input.toLowerCase();

  let result = "";

  for (let i = 0; i < lowercaseInput.length; i++) {
    const currentChar = lowercaseInput[i];

    if (currentChar === " ") {
      result += " "; // Maintain spaces
      continue;
    }

    // Find the index of the current character in the standard alphabet
    const standardIndex = standardAlphabet.indexOf(currentChar);

    if (encode) {
      result += alphabet[standardIndex];
    } else {
      // Find the corresponding character in the standard alphabet using the substitution alphabet
      const substitutedChar = standardAlphabet[alphabet.indexOf(currentChar)];
      result += substitutedChar;
    }
  }

  return result;
}

// Helper function to check if the alphabet parameter is valid
function isValidAlphabet(alphabet) {
  if (typeof alphabet !== "string" || alphabet.length !== 26) {
    return false;
  }

  // Check if all characters in the alphabet are unique
  const uniqueChars = new Set(alphabet);
  if (uniqueChars.size !== 26) {
    return false;
  }

  return true;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
