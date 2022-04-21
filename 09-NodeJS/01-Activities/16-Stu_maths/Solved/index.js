// Import maths.js module and assign the exported objects to `maths`
const maths = require('./maths');

// get the operation from the command line
const operation = process.argv[2];

// get the numbers from the command line and convert them from strings to numbers
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

// Perform the chosen operation using functions imported from maths. Want to
// learn a little more about how a switch works in JavaScript? Read about it on
// MDN.
switch (operation) {
  // like using: if (operation === 'sum') {...}
  case 'sum':
    console.log(maths.sum(numOne, numTwo));
    break;

  // like using: if (operation === 'difference') {...}
  case 'difference':
    console.log(maths.difference(numOne, numTwo));
    break;
    
  // like using: if (operation === 'product') {...}
  case 'product':
    console.log(maths.product(numOne, numTwo));
    break;
  
    // like using: if (operation === 'quotient') {...}
  case 'quotient':
    console.log(maths.quotient(numOne, numTwo));
    break;

  // Its typically a good practice to include a default case. Its kind of like
  // adding an else to a conditional.
  default:
    console.log('Check your maths!');
}
