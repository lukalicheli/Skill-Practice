// We change the `message` variables scope by using `let` instead of `var`.
const addGreetingMessage = (name) => {
  const message = 'How are you?';

  if (name.length > 0) {
    const message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// We use `let` instead of `const` so we can use the `callout` variable name twice without the worrying about hoisting.
const calloutCounter = () => {
  const callout = 'Outside of the loop';

  // We use `let` because the value of counter will be changed in the while loop
  // below. Using `const` would throw an error when we try to assign a new value
  // to counter with `counter--`.
  let counter = 5;

  while (counter > 0) {
    // We can shadow callout without an error using const because its block
    // scoped to the while loop.
    const callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// We use `let` to make sure our `i` variables can only be accessed within their scope.
// By using `const` we can ensure that `line` and `element` will not be renamed.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];

    // We shadow i here to demonstrate block scope. This could be confusing in
    // practice and should be avoided.
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
