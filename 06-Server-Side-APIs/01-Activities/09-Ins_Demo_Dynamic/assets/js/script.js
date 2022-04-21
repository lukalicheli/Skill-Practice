var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // Create elements to hold the content from the GitHub API
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');

        // Set the text of the new elements using the data from the API
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;

        // Add the elements to the page
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    });
}
fetchButton.addEventListener('click', getApi);
