# Sequelize One-to-Many Association Demo

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Run `mysql -u root -p < db/schema.sql` to create `cars_db`.

3. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

4. Run `node seeds/seed.js` to add seed data to `cars_db`.

5. Run `npm start` to start the app.

6. Perform a `GET` request to `/api/drivers/1` to view the data for a single driver including the driver data and the data for the cars which belong to the driver. (one-to-many relationship)
  
  Example Response:
  ```json
  {
    "id": 1,
    "name": "Sal",
    "address": "200 Response St",
    "license": {
      "id": 1,
      "license_number": "6a1e4d07-f642-421f-a3aa-031230b828e9",
      "is_donor": true,
      "driver_id": 1
    },
    "cars": [
      {
        "id": 3,
        "make": "Honda",
        "model": "Civic",
        "mileage": 50000,
        "driver_id": 1
      },
      {
        "id": 5,
        "make": "Toyota",
        "model": "Corolla",
        "mileage": 50000,
        "driver_id": 1
      },
      {
        "id": 6,
        "make": "Subaru",
        "model": "Outback",
        "mileage": 20000,
        "driver_id": 1
      }
    ]
  }
  ```

## Example Code

The Car model has a column referencing the Driver model. (`models/Car.js`)

```js
driver_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'driver',
    key: 'id',
  },
}
```

The code in `models/index.js` creates a Sequelize association between the `Car` and `Driver` models.

```js
Driver.hasMany(Car, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(Driver, {
  foreignKey: 'driver_id',
});
```

The `GET /api/drivers/:id` route queries with the `include` option to perform a join between the `car` and `driver` tables. (See `routes/api/driverRoutes.js`)

```js
const driverData = await Driver.findByPk(req.params.id, {
  include: [{ model: License }, { model: Car }],
});
```

## Documentation

See [Associations: One-To_Many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships) in the Sequelize Manual.
