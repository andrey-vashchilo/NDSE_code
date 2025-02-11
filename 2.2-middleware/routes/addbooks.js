const express = require("express");
const Book = require("../modules/book");
const store = require("../modules/store");
const fileMulter = require("../middleware/file");

const router = express.Router();

router.post('/api/books', fileMulter.single("fileBook"), (req, res) => {
  const { books } = store;
  const { title, description, authors, favority, fileCover, fileName } = req.body;
  const newBook = new Book(title, description, authors, favority, fileCover, fileName);
  books.push(newBook);

  if (req.file) {
    const { path } = req.file;
    newBook.fileBook = path;
  }
  res.status(201);
  res.json(newBook);
});


module.exports = router;