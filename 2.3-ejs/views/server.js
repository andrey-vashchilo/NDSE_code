const { url } = require('./config');
const express = require('express');
const userRouter = require('./routes/user');
const apiBooksRouter = require('./routes/apiBooks');
const booksRouter = require('./routes/books');
const error = require('./middleware/error');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(`${url}/user`, userRouter);
app.use(`${url}/books`, apiBooksRouter);
app.use('/books', booksRouter);
app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
