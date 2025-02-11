const express = require("express");
const store = require("../modules/store");

const router = express.Router();

router.delete('/api/books/:id', (req, res) => {
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


module.exports = router;