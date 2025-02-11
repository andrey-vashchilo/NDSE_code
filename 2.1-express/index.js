const express = require('express');
const { v4: uuid } = require('uuid');

class Book {
    constructor(
        title = "",
        description = "",
        authors = "",
        favorite = "",
        fileCover = "",
        fileName = "",
    ) {
        this.id = uuid();
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
}


const store = {
    books: [],
};

const app = express();
app.use(express.json());

app.get('/api/books', (req, res) => {
    const { books } = store;
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
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

app.post('/api/user/login', (req, res) => {
    const user = {
        "id": "1",
        "mail": "test@mail.ru"
    };

    res.status(201).type('text/plain');
    res.json(user);
});

app.post('/api/books', (req, res) => {
    const { books } = store;
    const { title, description, authors, favority, fileCover, fileName } = req.body;

    const newBook = new Book(title, description, authors, favority, fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
})

app.put('/api/books/:id', (req, res) => {
    const { books } = store;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
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
            fileName
        };

        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
});

app.delete('/api/books/:id', (req, res) => {
    const { books } = store;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        res.status(404);
        res.json('404 | страница не найдена');
        return;
    }

    books.splice(idx, 1);
    res.json('ok');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
