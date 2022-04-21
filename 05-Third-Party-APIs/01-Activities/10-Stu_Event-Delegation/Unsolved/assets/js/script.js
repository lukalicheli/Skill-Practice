var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// Handles removing a list item when `.delete-item-btn` is clicked
function handleRemoveItem(event) {
  // TODO: convert button we pressed (`event.target`) to a jQuery DOM object and store it in a variable.

  // TODO: get the parent `<li>` element from the button we pressed and remove it
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute handleRemoveItem

shoppingFormEl.on('submit', handleFormSubmit);
