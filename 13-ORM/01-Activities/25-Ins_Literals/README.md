# Sequelize Sequelize Literal Demo

While Sequelize include a lot of built-in functionality, there are times where its easier to write a more complex query using regular SQL syntax. Use `sequelize.query` or `sequelize.literal` for these cases.

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Run `mysql -u root -p < db/schema.sql` to create `cars_db`.

3. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

4. Run `node seeds/seed.js` to add seed data to `cars_db`.

5. Run `npm start` to start the app.

6. Perform a `GET` request to `/api/drivers/2` to receive the data for a driver with the drivers cars including the mileage for each car. 

  Example response:
  ```json
  {
    "id": 1,
    "name": "Sal",
    "address": "200 Response St",
    "totalMileage": "120000",
    "license": {
      "id": 1,
      "license_number": "1ba2b987-421d-4653-8410-c7af0874dc60",
      "is_donor": true,
      "driver_id": 1
    },
    "cars": [
      {
        "id": 1,
        "make": "Ford",
        "model": "Mustang",
        "mileage": 40000,
        "driver_id": 1
      },
      {
        "id": 2,
        "make": "Honda",
        "model": "Accord",
        "mileage": 30000,
        "driver_id": 1
      },
      {
        "id": 5,
        "make": "Toyota",
        "model": "Corolla",
        "mileage": 50000,
        "driver_id": 1
      }
    ]
  }
  ```

## Example Code

Include `sequelize.literal` to perform a sub-query to get each car's total mileage. (See `routes/api/driverRoutes.js`)

```js
const driverData = await Driver.findAll({
  include: [{ model: License }, { model: Car }],
  attributes: {
    include: [
      [
        // Use plain SQL to add up the total mileage
        sequelize.literal(
          '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
        ),
        'totalMileage',
      ],
    ],
  },
});
```

Be sure to import the sequelize connection in order to call `sequelize.literal()`.

```js
const sequelize = require('../../config/connection');
```

## Documentation

- See [Sub Queries](https://sequelize.org/master/manual/sub-queries.html) in the Sequelize Manual.

- See [Raw Queries][https://sequelize.org/master/manual/raw-queries.html] in the Sequelize Manual

- See [public static literal][https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#static-method-literal] in the Sequelize API Reference.

