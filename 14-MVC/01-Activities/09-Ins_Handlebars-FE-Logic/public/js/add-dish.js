async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
  // Radio inputs and checkboxes of a `checked` property that returns a boolean.
  const has_nuts = document.querySelector('#has_nuts').checked;
  // Send fetch request to add a new dish
  const response = await fetch(`/api/dish`, {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }
}

document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
  