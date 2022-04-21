const express = require('express');

// Node has a built-in ability to import a json file as a JavaScript object/array
const apis = require("./apis.json");

const PORT = 3001;
const app = express();

// Use res.send to send some text or html in the body of the response
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

// Use res.json to send data using the JSON format in the body of the response
app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.get("/list", (req, res) => {
  // Sending the object imported from "./apis.json"
  res.json(apis);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
