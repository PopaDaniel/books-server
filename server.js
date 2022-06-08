const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./controllers/register");
const Book = require("./controllers/bookController");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.post("/books", (req, res) => {
  register.handleRegister(req, res, Book);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
