const petEl = document.getElementById('pets');
const termButton = document.getElementById('term-btn');

// The server doesn't have a route for POST /api/terms. Change the path to
// /api/pets and the method needs to match the server route so changed "POST" to
// "GET". Remove body since "GET" requests are not allowed to contain a body.
const getPets = () =>
  fetch('/api/pets', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);

const renderPet = (pet) => {
  const cardEl = document.createElement('div');
  const cardImageEl = document.createElement('img');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardImageEl.classList.add('image', 'p-5');
  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardImageEl.setAttribute('src', pet.image_url);
  cardBodyTitle.innerHTML = pet.name;
  cardBodyEl.innerText = pet.description;
  cardEl.appendChild(cardBodyTitle);
  cardEl.appendChild(cardBodyEl);
  cardEl.appendChild(cardImageEl);
  petEl.appendChild(cardEl);
};

const buttonHandler = () =>
  getPets().then((response) => response.forEach((item) => renderPet(item)));

termButton.addEventListener('click', buttonHandler);
