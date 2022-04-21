# Sequelize Hooks Demo

Hooks can help us perform actions before and after calls in Sequelize are executed. Sequelize has many available hooks. The `beforeCreate()` and `beforeUpdate()` hooks are used to convert user email address to all lowercase letters before they are added to the database. See [Hooks](https://sequelize.org/master/manual/hooks.html) in the Sequelize manual for a list of available hooks and when they are called.

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Run `mysql -u root -p < db/schema.sql` to create `user_db`.

3. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

4. Run `node server.js` to start the app.

5. Send a `POST` request to `/api/users` containing JSON for a new user in the body with uppercase letters in the email address.
  
  Example user json:

  ```json
  {
    "username": "test1",
    "email": "TEST1@email.com",
    "password": "Password123"
  }
  ```

  Example response json with email converted to lowercase by the hook function added to `models/User.js`:

   ```json
  {
    "username": "test1",
    "email": "test1@email.com",
    "password": "Password123"
  }
  ```

## Example Code

See `models/User.js` for example usage of the `beforeCreate` and `beforeUpdate` hooks. Sequelize will run these functions whenever a user is saved or updated respectively.

Important note: The `individualHooks: true` option is added to the call to `User.update()` in `routes/api/userRoutes`, in order to trigger the beforeUpdate hook. This option is not necessary with the `User.create()` function.
