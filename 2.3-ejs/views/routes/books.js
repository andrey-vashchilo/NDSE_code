const express = require('express');
const { Book } = require('../store/books');
const { books } = require('../store/books');
const router = express.Router();
const fileBook = require('../middleware/fileBook');

router.get('/', (req, res) => {
	res.render('books/index', {
		title: 'Список книг',
		books,
	});
});

router.get('/create', (req, res) => {
	res.render('books/create', {
		title: 'Создать книгу',
		books,
	});
});

router.post('/create', fileBook.single('fileBook'), (req, res) => {
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

	res.redirect('/books/');
});

router.get('/:id', (req, res) => {
	const book = books.find(b => b.id === req.params.id);
	if (!book) return res.redirect('/404');

	res.render('books/view', {
		title: book.title,
		book,
	});
});

router.get('/update/:id', (req, res) => {
	const book = books.find(b => b.id === req.params.id);
	if (!book) return res.redirect('/404');

	res.render('books/update', {
		title: 'Редактировать книгу',
		book,
	});
});

router.post('/update/:id', fileBook.single('fileBook'), (req, res) => {
	const bookIndex = books.findIndex(b => b.id === req.params.id);
	if (bookIndex === -1) return res.redirect('/404');

	const { title, description, authors, favorite, fileCover, fileName } =
		req.body;
	const fileBook = req.file ? req.file.path : '';

	books[bookIndex] = new Book(
		title,
		description,
		authors,
		favorite,
		fileCover,
		fileName,
		fileBook || books[bookIndex].fileBook
	);

	res.redirect('/books/');
});

module.exports = router;
