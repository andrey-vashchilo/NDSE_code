const express = require('express');
const store = require("../modules/store");

const router = express.Router();

router.get('/api/books', (req, res) => {
    const { books } = store;
    res.json(books);
});

router.get('/api/books/:id', (req, res) => {
    const { books } = store;
    const { id } = req.params;
    const book = books.find(el => el.id === id);

    if (!book) {
        res.status(404).type('text/plain');
        res.json('404 | страница не найдена');

        return;
    }

    res.json(book);
});

module.exports = router;