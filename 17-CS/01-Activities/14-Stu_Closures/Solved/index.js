function counter() {
  // Create a 'count' variable inside of the outer function.
  let count = 0;

  // Return an inner function creating a closure.
  return {
    increment() {
      // Increment the outer function's 'count' variable by one.
      count += 1;
      return count;
    },
  };
}

module.exports = counter;
