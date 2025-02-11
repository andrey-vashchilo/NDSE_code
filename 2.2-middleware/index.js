const express = require("express");
const index = require("./routes/index");
const user = require("./routes/user");
const addBooks = require("./routes/addbooks");
const editBooks = require("./routes/editbooks");
const delBooks = require("./routes/delbooks");
const downloadBooks = require("./routes/download");
const error404 = require('./middleware/err-404');

const app = express();
app.use(express.json());

app.use("", index);
app.use("", user);
app.use("", addBooks);
app.use("", editBooks);
app.use("", delBooks);
app.use("", downloadBooks);
app.use("/public", express.static(__dirname + "/public"));

app.use(error404);

const PORT = process.env.PORT || 3000;
app.listen(PORT);