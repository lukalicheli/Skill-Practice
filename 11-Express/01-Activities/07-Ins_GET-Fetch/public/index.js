console.log('hello');
const termEl = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

const getTerms = async () => {
  termEl.innerHTML = 'Loading terms...';

  // 🔑 The important part of any fetch() request is the method and the path.
  // Here we set the method to GET and the path /api/terms.
  const result = await fetch('/api/terms', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};

// Render each term to the page in a card
const renderTerm = (term) => {
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
  cardBodyEl.innerText = term.definition;
  termEl.appendChild(cardBodyTitle);
  termEl.appendChild(cardBodyEl);
};

// This function requests the terms from the server and displays them.
const buttonHandler = () =>
  getTerms().then((response) => {
    termEl.innerHTML = "";
    response.forEach((item) => renderTerm(item))
  });

// Fetch and display terms whenever the button is clicked.
termButton.addEventListener('click', buttonHandler);
