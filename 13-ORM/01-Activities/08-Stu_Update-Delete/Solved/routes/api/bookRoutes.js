const router = require('express').Router();
const Book = require('../../models/Book');

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// Updates book based on its book_id
router.put('/:book_id', (req, res) => {
  //Calls the update method on the Book model
  Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete route for a book with a matching book_id
router.delete('/:book_id', (req, res) => {
  // Looks for the books based book_id given in the request parameters
  Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      isbn: '9781593279509',
      pages: 472,
      edition: 3,
      is_paperback: true
    },
    {
      title: 'Pragmatic Thinking and Learning: Refactor Your Wetware',
      author: 'Andy Hunt',
      isbn: '9781934356050',
      pages: 251,
      edition: 1,
      is_paperback: true
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
