// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// Refactored 'practiceCoding()' to use promises
const practiceCoding = () =>
  new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    }
    resolve('We are coding!');
  });

// Refactor to call 'practiceCoding()' and chain a 'then()' and 'catch()'
practiceCoding()
  // message is the value passed to resolve() in practiceCoding()
  .then((message) => console.log(message))
  // err is the error object passed to reject() in practiceCoding()
  .catch((err) => console.error('Promise rejected:', err));
