const grades = [56, 78, 99, 85];

// We receive the accumulator, currentValue, index, and the array from the reduce method. We only need to use accumulator and currentValue to find the count.
function count(accumulator, currentValue) {
  // Add 1 to the count when the condition is met
  if (currentValue > 59) {
    return accumulator + 1;
  }

  // Return the count without adding to it when condition is not met
  return accumulator;
}

// Pass the 'count' function into the reduce method and pass 0 in as the initial value for the accumulator.
const totalPassing = grades.reduce(count, 0);

// log the 'totalPassing' variable to see the result.
console.log(totalPassing);
