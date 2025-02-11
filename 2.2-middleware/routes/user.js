const express = require("express");

const router = express.Router();

router.post('/api/user/login', (req, res) => {
    const user = {
        "id": "1",
        "mail": "test@mail.ru"
    };

    res.status(201).type('text/plain');
    res.json(user);
});


module.exports = router;