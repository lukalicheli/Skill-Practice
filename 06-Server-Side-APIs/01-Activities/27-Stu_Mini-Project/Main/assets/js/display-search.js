var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and
  // convert it to an array (i.e. ['?q=london', 'format=photo']). These params
  // are set in script.js.
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();

  searchApi(query, format);
}


// Function takes a result object from the api and adds content to the DOM,
// displaying the results on the page.
function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> No subject for this entry.';
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong> ' + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong>  No description for this entry.';
  }

  var linkButtonEl = document.createElement('a');
  linkButtonEl.textContent = 'Read More';
  linkButtonEl.setAttribute('href', resultObj.url);
  linkButtonEl.classList.add('btn', 'btn-dark');

  resultBody.append(titleEl, bodyContentEl, linkButtonEl);

  resultContentEl.append(resultCard);
}

function searchApi(query, format) {
  // Build a url to fetch data from the api including user input in the url parameters.
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  // If the user selected a format, add it to the url
  if (format) {
    locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
  }

  // Set the "q" parameter which is the search term entered by the user.
  locQueryUrl = locQueryUrl + '&q=' + query;

  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        // Throwing an error will end this function at this line and skip to the
        // function in `.catch` below.
        throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
      // write query to page so user knows what they are viewing
      resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        // clear any previous search results
        resultContentEl.textContent = '';

        // pass data to function which adds results to the page
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

// This function is nearly the same as the one in script.js
function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Get user input from the form
  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  // Pass intput to searchApi which will fetch data
  searchApi(searchInputVal, formatInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();
