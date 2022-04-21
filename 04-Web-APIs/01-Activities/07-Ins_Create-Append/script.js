// create a new element object without adding to the document
var newElement = document.createElement("h1");

// set the text
newElement.textContent = "Hello, New Elements";

// style the element
newElement.setAttribute(
  "style",
  "color: darkcyan; font-size: 40px; text-align: center;"
);

// add the element to the document
document.body.appendChild(newElement);

// elements can be append to other elements
var box = document.createElement("div");
var paragraph = document.createElement("p");

// set attributes and text
box.setAttribute(
  "style",
  "border: 3px solid darkcyan; margin: 0 auto; padding: 15px; background-color: cyan; max-width: 300px;"
);
paragraph.textContent = "This is my first time creating elements.";
paragraph.setAttribute(
  "style",
  "color: #333; font-size: 20px; font-family: sans-serif;"
);

// add the paragraph to the box
box.appendChild(paragraph);

// add the box to the document
document.body.appendChild(box);
