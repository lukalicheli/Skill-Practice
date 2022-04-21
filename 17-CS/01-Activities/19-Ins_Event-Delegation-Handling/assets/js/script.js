// Select the container which holds our buttons that we want to add our event
// listener too.
const containerEl = document.getElementById('container');

const clickHandler = function (event) {
  // Check to see if the element is a button.
  if (event.target.matches('button')) {
    // Convert the `data-count` attribute from a string to an integer.
    let count = parseInt(event.target.getAttribute('data-count'));

    // Increase our `data-count` attribute by one.
    count += 1;

    // Set the newly incremented `count` variable to the `data-count` attribute.
    event.target.setAttribute('data-count', count);

    // Update what the button's display to show the correct amount of clicks.
    event.target.textContent = `Clicks: ${count}`;
  }
};

// Add the click handler to the container that holds our buttons.
containerEl.addEventListener('click', clickHandler);
