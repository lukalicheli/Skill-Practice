const express = require('express');
const path = require('path');

// express() returns an instance of the Express App object
const app = express();
const PORT = 3001;

// This will serve all the static files within public. (Note the "public" is not
// actually part of the route path for the server. e.g. "/jass.css" will receive
// the jass.css file, NOT "/public/jass.css")
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// Defines a route that sends paths.html when a GET request with the path
// "/paths" is received from a client.
app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
