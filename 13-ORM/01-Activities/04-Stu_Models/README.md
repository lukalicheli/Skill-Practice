# 🐛 MySQL Table Isn't Being Created to Specifications

Work with a partner to resolve the following issues:

* As a developer, I want a MySQL table with the same name as the Sequelize model.

* As a developer, I want a more descriptive primary key name in the MySQL table.

## Expected Behavior

When Sequelize syncs the model with the database, the table name should be `book` (singular) and the primary key name should be `book_id`.

## Actual Behavior

The table name is `books`, and the primary key is `id`.

## Steps to Reproduce the Problem

1. Copy the contents of `.env.EXAMPLE` into `.env` by opening the terminal to the `Unsolved` directory and running `cp .env.EXAMPLE .env`.

2. Add your MySQL password and username to `.env`.

3. Back in the terminal, run `npm i` to install the required dependencies.

4. In the terminal, run `mysql -u root -p < db/schema.sql` to create the database.

5. Run `npm start` from the command line to start the server and sync the database.

6. In a new terminal, run `mysql -u root -p` to log into the MySQL shell.

7. In the MySQL shell, run `USE library_db;` to switch to the library database.

8. Try to run `DESCRIBE book;`. It will fail because the table name is `books`.

9.  Run `DESCRIBE books;`. Note that the primary key is named `id` and not `book_id`.

---

## 💡 Hints

What options does Sequelize provide when it comes to naming tables and fields?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you globally define table-naming rules for your Sequelize connection?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
