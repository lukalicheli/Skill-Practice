// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

/* 
  htmlElement.addEventListener(eventName, function);

  - Replace htmlElement with the element that should respond to the event.
  - Replace eventName with a string for the type of event. (e.g. "click", "change", "focus", etc.)
  - Replace function with the function that should be called each time the event occurs.
*/
