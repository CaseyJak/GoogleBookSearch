const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, requires: true },
    description: String,
    image: String,
    link: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", Schema);

module.export = Book;