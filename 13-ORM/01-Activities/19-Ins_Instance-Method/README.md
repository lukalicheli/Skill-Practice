# Sequelize Custom Instance Methods Demo

Sometimes you may want to access only a specific data point rather than ALL of the data associated with a model. For example, maybe you want to know if a user in a pet adoption database currently has any pets. Instead of using GET to return all of that user's information, you can use instance methods to find the specific data you want&mdash;whether that user has pets or not.

Sequelize provides you with a way to write instance methods within models.

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Run `mysql -u root -p < db/schema.sql` to create `user_db`.

3. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

4. Run `node server.js` to start the app.

5. Send a `POST` request to `/api/users` containing JSON for a new user in the body.
  
  Example request json:
  ```json
  {
    "username": "test1",
    "email": "test1@email.com",
    "password": "Password123",
    "numberOfPets": 2
  }
  ```

  Example response json:
  ```json
  {
    "id": 1,
    "username": "test1",
    "email": "test1@email.com",
    "password": "$2b$10$l9VQG5cvQCLc1iSOTv17TOde61F3f1Z3B5gkEaaecf1gh0pZmcpYS",
    "numberOfPets": 2
  }
  ```

6. Test the `/api/users/:id/hasPets` route by sending a request to `/api/users/1/hasPets` and note the response.

  Example response json:
  ```json
  {
    "message": "This person has pets!"
  }
  ```

  This route utilizes the custom method defined in the User model to determine if the requested user has any pets.

## Example Code

See `models/User.js` for an example of a custom instance method. (`hasPets`)

```js
class User extends Model {
  hasPets() {
    if (this.numberOfPets > 0) {
      return true;
    } else {
      return false;
    }
  }
}
```

See `routes/api/userRoutes.js` and look in the `GET /api/users/:id/hasPets` route for an example of calling the custom `hasPets` instance method of the `User` model.

```js
const petData = userData.hasPets();
```

## Additional Documentation

See the [Model Basics: Taking advantage of Models being classes](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes) section in the Sequelize docs.
