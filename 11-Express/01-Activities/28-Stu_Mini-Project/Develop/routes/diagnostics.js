const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  // - HINT: req.body.errors will contain the errors once the client logic is
  //   implemented
  // - HINT: Calling uuidv4() will return a unique id string
  // - HINT: Use Date.now() to add a time stamp.
  // - Example diagnostic object:
  // {
  //   "time": 1616087317843,
  //   "error_id": "ca0616fa-f603-4d85-a9c6-fa62c73a9bf9",
  //   "errors": {
  //     "tip:": "Tip must be at least 15 characters long",
  //     "topic": "",
  //     "username": " Username is too short"
  //   }
  // }
});

module.exports = diagnostics;
