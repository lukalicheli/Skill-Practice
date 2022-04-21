const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "employees"
});

connection.connect(function (err) {
  if (err) {
    console.error(err);
    console.log("Unable to connect to db.");
    process.exit(1);
  };
});

module.exports = connection;
