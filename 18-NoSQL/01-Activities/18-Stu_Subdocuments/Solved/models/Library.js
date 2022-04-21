const mongoose = require("mongoose");

// The librarySchema defines the schema of the parent document
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // This will include an array that holds all the books
  books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Library = mongoose.model('Library', librarySchema);


module.exports = Library;
