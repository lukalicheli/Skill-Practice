const db = require("../config/connection");
const { Book, Library } = require("../models");
const bookData = [
  { title: "Diary of Anne Frank", price: 10 },
  { title: "One Hundred  Years of Solitude", price: 20 },
  { title: "History of Hogwarts", price: 5 },
];

db.once("open", async () => {
  try {
    // delete collections
    await Book.deleteMany();
    await Library.deleteMany();

    // seed books
    const books = await Book.create(bookData);

    // seed libraries
    await Library.create({
      name: "Books",
      books: books.map((book) => book._id),
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
