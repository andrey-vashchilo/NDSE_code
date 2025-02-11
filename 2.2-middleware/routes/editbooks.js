const express = require("express");
const Book = require("../modules/book");
const store = require("../modules/store");
const fileMulter = require("../middleware/file");

const router = express.Router();

router.put('/api/books/:id', fileMulter.single("fileBook"), (req, res) => {
    const { books } = store;
    const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
            fileBook
        };

        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
});

module.exports = router;