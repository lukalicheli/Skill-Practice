const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add one-to-many association so that a reader has many books and a book belongs to a reader.

module.exports = { Reader, Book, LibraryCard };
