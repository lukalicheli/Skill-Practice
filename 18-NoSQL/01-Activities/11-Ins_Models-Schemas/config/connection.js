const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/mygroceryDB', {
  // it isn't crucial to understand these options. you can read more in the mongoose docs if you are curious.
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;
