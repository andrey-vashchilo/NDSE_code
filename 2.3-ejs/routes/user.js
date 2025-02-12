const express = require('express');
const router = express.Router();
const testUser = { id: 1, mail: 'test@mail.ru' };

router.post('/login', (req, res) => {
	res.status(201);
	res.json(testUser);
});

module.exports = router;
