const durations = [400, 800, 1100, 1500];

// Try setting maxDuration to a smaller value to test if your promise rejects
// correctly.
const maxDuration = 5000;

const wait = (timeout) =>
  new Promise((resolve, reject) => {
    // If the timeout exceeds the max, reject the promise.
    if (timeout > maxDuration) {
      return reject(new Error("This timeout is too long."));
    }
    setTimeout(() => {
      // Calling resolve after waiting for the async process (timeout in this
      // case) to complete.
      resolve(`Timeout for ${timeout} ms ended.`);
    }, timeout);
  });

const promises = durations.map((duration) => wait(duration));

console.log("Promises array before the timeouts have finished: ", promises);

// Use Promise.all() to capture when the array of promises has been resolved.
// Promise.all() will reject as soon as any promise in the array rejects.
Promise.all(promises)
  .then(console.log)
  .catch((err) => {
    console.log(err);
    console.log("A promise was rejected!");
    console.log(promises);
  });

// Relection: What can Promise.all() help you do as a JavaScript developer?
