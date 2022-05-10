const express = require("express");
const res = require("express/lib/response");
const app = express();

//Instalirame cors i body-parser
const cors = require("cors");
const bodyParser = require("body-parser");
const booksRute = require("./routes/books");

app.use(cors());
app.use(bodyParser.json());
app.use("/books", booksRute);

app.listen(5000);
