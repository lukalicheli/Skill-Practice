# Steps to Configure dotenv

0. Open the [dotenv documentation](https://www.npmjs.com/package/dotenv).

1. Install the dotenv package. npm i dotenv

2. Create a `.env` file with variables for `DB_NAME`, `DB_USER`, and `DB_PASSWORD`.

3. Copy `require('dotenv').config();` from the documentation and paste it at the top of server.js.

4. Open `config/connection.js` and replace the database name, username, and password with `process.env.<var name goes here>`.

5. Ensure that `.env` is added to `.gitignore` before committing these changes to avoid commiting sensitive passwords, api keys, or other values you want kept a secret.

6. Keeping a `.env.example` file in the repo is helpful so that other developers can use it as a template for creating their own `.env` file. (Remember, `.env` is ignored so it won't be there when someone clones the repo.)
