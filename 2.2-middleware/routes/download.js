const express = require("express");
const Book = require("../modules/book");
const store = require("../modules/store");

const router = express.Router();

router.get("/api/books/:id/download", (req, res) => {
	const { books } = store;
	const { id } = req.params;
	const idx = books.findIndex((el) => el.id === id);
	if (idx !== -1) {
	  res.download(books[idx].fileBook, books[idx].fileName);
	} else {
	  res.status(404);
	  res.json({ errcode: 404, errmsg: "404 | страница не найдена" });
	}
  });



module.exports = router;