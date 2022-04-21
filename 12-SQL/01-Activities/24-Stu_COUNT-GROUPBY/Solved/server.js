const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'books_db'
  }
);

// Query database using COUNT() and GROUP BY. This query result gives the number
// of titles in stock. (Not the total books in stock, but the count of distict
// titles which are in stock.)
db.query('SELECT COUNT(*) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  if (err) {
    throw err;
  }
  console.log(results);
});

// Query database using SUM(), MAX(), MIN() AVG(), GROUP BY, and ORDER BY. This query result displays a summary of the books in each section sorted by section number.
db.query('SELECT section, SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section ORDER BY section', function (err, results) {
  if (err) {
    throw err;
  }
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
