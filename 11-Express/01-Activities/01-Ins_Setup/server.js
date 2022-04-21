// Import express (be sure its installed using npm)
const express = require('express');
const path = require('path');

// Create an instance of the App object
const app = express();
// Create a variable to hold the port number for the express app
const PORT = 3001;

// This snippet enables routing to all files in the "public" folder
app.use(express.static('public'));

// Create a route handling requests to "http://localhost:3001/" (root) using the
//   GET method and send text in the response.
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// Create a route handling GET requests to "http://localhost:3001/send"
// - Use res.sendFile to send a static html"
// - Use path.join(__dirname, path_to_file) to send a file in the response.
app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

// Create a route handling  GET requests to "http://localhost:3001/routes"
app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// app.listen(port_number, callback_function) allows the server to start
//   accepting requests. The callback is run after the server opens the given
//   port_number.
// - ATTENTION! An EADRRINUSE error will be thrown if another program on the computer is
//   already using the given PORT.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
