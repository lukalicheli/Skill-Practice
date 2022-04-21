# 🏗️ Implement One-to-Many Association Between Reader and Book Models

Work with a partner to implement the following user story:

* As a book owner, I want to see the books in my collection.

## Acceptance Criteria

* It's done when the MySQL table for book data has a foreign key referencing the reader table.

* It's done when the response of a GET request to `/api/readers` or `/api/readers/:id` includes the books owned by a reader, like the following JSON:

  ```json
  {
    "id": 1,
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "$2b$10$jCFIDDFQXiHkaMs4nK8Dc.JiS3N7lyKmqeEUanNJI19FrAiAAaAwS",
    "library_card": {
      "id": 2,
      "card_number": "40923fce-362f-4068-8542-efded13b9e80",
      "reader_id": 1
    },
    "books": [
      {
        "id": 5,
        "title": "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "isbn": "9781593279509",
        "pages": 472,
        "edition": 3,
        "is_paperback": true,
        "reader_id": 1
      }
    ]
  }
  ```

---

## 💡 Hints

When you associate these models, what will the relationship look like? Would users belong to books, or would books belong to users? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* As a JavaScript developer using Sequelize, why do you still need to know SQL?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.