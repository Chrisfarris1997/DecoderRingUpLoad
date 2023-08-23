// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
  // Step 1: Define the function named 'polybius' with two parameters: 'input' and 'encode'
  const polybiusSquare = {
    // Step 2: Create a dictionary (object) called 'polybiusSquare' to map letters to number pairs
    A: '11', B: '21', C: '31', D: '41', E: '51',
    F: '12', G: '22', H: '32', I: '42', J: '42',
    K: '52', L: '13', M: '23', N: '33', O: '43',
    P: '53', Q: '14', R: '24', S: '34', T: '44',
    U: '54', V: '15', W: '25', X: '35', Y: '45', Z: '55'
  };

  // Step 3: Convert the 'input' text to LowerCase
  input = input.toUpperCase();

  if (encode) {
    // Step 4: If 'encode' is true, proceed with encoding
    let output = ''; // Initialize an empty string to store the encoded output
    for (let char of input) { console.log(char);
      // Step 5: Loop through each character in the 'input' text
      if (char === ' ') { 
        // Step 6: If the character is a space, add a space to the 'output'
        output += ' ';
      } else { 
        console.log(polybiusSquare[char]);// Step 7: If the character is not a space, find its corresponding number pair from 'polybiusSquare'
        output += polybiusSquare[char] || char; // If not found, keep the character unchanged
      }
    }
    console.log(input, output);
    return output; // Step 8: Return the encoded output
  } else {
    const withoutSpaces = input.replace(/\s/g, ''); // Remove spaces from the 'input'
    if (withoutSpaces.length % 2 !== 0) {
      return false; // Return false for odd input length
    }

    let output = '';
    console.log(input);
    for (let i = 0; i < input.length; i += 1) {
      console.log('i', i);
      if(input[i] === ' '){
        output += " ";
        console.log("add space");
      } else {
        
      
      const pair = input.substr(i, 2);
        console.log("pair", pair);
      if (pair === '42') {
        output += '(I/J)';
      } else {
        const letter = Object.keys(polybiusSquare).find(key => polybiusSquare[key] === pair);
        console.log(pair, letter);
        output += letter;
      } 
        i++;
      }
    }
    return output.toLowerCase();
  }
}



  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
