const fs = require('fs');
const express = require('express');
const router = express.Router();
const fileBook = require('../middleware/fileBook');
const { Book } = require('../store/books');
const { books } = require('../store/books');

router.get('/', (req, res) => {
	res.json(books);
});
router.get('/:id', (req, res) => {
	const book = books.find(b => b.id === req.params.id);
	if (!book) return res.status(404).json('Not Found');

	res.json(book);
});

router.post('/', fileBook.single('fileBook'), (req, res) => {
	const { title, description, authors, favorite, fileCover, fileName } =
		req.body;
	const fileBook = req.file ? req.file.path : '';
	const book = new Book(
		title,
		description,
		authors,
		favorite,
		fileCover,
		fileName,
		fileBook
	);
	books.push(book);

	res.status(201).json(book);
});

router.put('/:id', (req, res) => {
	const bookIndex = books.findIndex(b => b.id === req.params.id);
	if (bookIndex === -1) return res.status(404).json('Not Found');

	const { title, description, authors, favorite, fileCover, fileName } =
		req.body;
	books[bookIndex] = {
		...books[bookIndex],
		title,
		description,
		authors,
		favorite,
		fileCover,
		fileName,
	};

	res.json(books[bookIndex]);
});

router.delete('/:id', (req, res) => {
	const bookIndex = books.findIndex(b => b.id === req.params.id);
	if (bookIndex === -1) return res.status(404).json('Not Found');

	books.splice(bookIndex, 1);
	res.json('Successes');
});

router.get('/:id/download', (req, res) => {
	const book = books.find(b => b.id === req.params.id);
	if (!book) return res.status(404).json('Not Found');

	const { fileBook } = book;
	if (!fileBook) return res.status(404).json('Book not found');

	res.download(fileBook, err => {
		if (err) {
			return res.status(500).json('Error downloading book');
		}
	});
});

module.exports = router;
