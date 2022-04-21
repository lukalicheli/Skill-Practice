var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  // Response is converted to an array/object automatically if the server
  // response contains info on the format.
  console.log(response);
});

// Browser Fetch Method
fetch(requestUrl)
  .then(function (response) {
    // response must be parsed using .json(), or one of several other functions
    // depending on the format of the response body.
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  // check whether xhr.readyState equals XMLHttpRequest.DONE
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    // The response is a string (would need to use JSON.parse if the response is
    // formatted as JSON)
    console.log(xhr.response);
  }
};

// Initialize a GET request for a given URL
xhr.open('GET', requestUrl);

// Send the request
xhr.send();
