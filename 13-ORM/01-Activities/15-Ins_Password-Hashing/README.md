# Password Hashing Demo

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Install `bcrypt` npm package by running `npm i bcrypt`.

3. Run `mysql -u root -p < db/schema.sql` to create `user_db`.

4. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

5. Run `node server.js` to start the app.

6. Send a `POST` request to `/api/users` containing JSON for a new user in the body. Example user json:

  ```json
  {
    "username": "test2",
    "email": "test1@email.com",
    "password": "Password123"
  }
  ```

## Password Hashing with bcrypt

- Install `bcrypt`
- Import bcrypt with `const bcrypt = require("bcrypt");`
- Hash a password by calling `bcrypt.hash(password, salt_rounds)`
- See `routes/api/userRoutes.js` for an example of hashing a password in a route which adds a new user to a database.

## About bcrypt

bcrypt is a library to help you hash passwords. See the [bcrypt repo](https://github.com/kelektiv/node.bcrypt.js#readme) to learn more.
