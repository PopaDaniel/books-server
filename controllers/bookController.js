const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  numPages: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    default: "Free",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
