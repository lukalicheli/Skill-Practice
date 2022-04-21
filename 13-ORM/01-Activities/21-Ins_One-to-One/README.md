# Sequelize One-to-One Association Demo

## Setup and Usage

1. Run `npm i` to install dependencies.

2. Run `mysql -u root -p < db/schema.sql` to create `cars_db`.

3. Create a `.env` file by copying `.env.EXAMPLE`. Run `cp .env.EXAMPLE .env` to make a copy. Open `.env` and add your MySQL username and password.

4. Run `node seeds/seed.js` to add seed data to `cars_db`.

5. Run `node server.js` to start the app.

## Example Code

See the `License` model. (`models/License.js`) Note the `driver_id` field in the `License` model `references` the `id` field of the `driver` model.

```js
driver_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'driver',
    key: 'id',
  },
}
```

See the code in `models/index.js` for an example of setting up a `one-to-one` association between to models.

```js
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});
```

## Documentation

See [Associations: One-To_one relationships](https://sequelize.org/master/manual/assocs.html#one-to-one-relationships) in the Sequelize Manual.
