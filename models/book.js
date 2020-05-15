const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  bookId: { type: String, required: true, unique: true },
});

const Book = mongoose.model("Book", booksSchema);
module.exports = Book;
