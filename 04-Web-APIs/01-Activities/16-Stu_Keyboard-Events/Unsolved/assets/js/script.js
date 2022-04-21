function keydownAction(event) {
  // TODO: add code here. (pseudo-code has been provided)
  // assign key that was pressed to a variable
  // assign code for key that was pressed to a variable
  // display the key that was pressed in the #key element
  // display the code for the key that was pressed in the #code element
  // display "KEYDOWN event" in the #status element
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

