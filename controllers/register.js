const handleRegister = async function (req, res, Book) {
  const { name, genre, numberPages, price } = req.body;
  const findE = await Book.findOne({ name: name });
  if (findE) {
    return res.status(400).json("Book already exists");
  } else {
    const sendBook = new Book({
      name: name,
      genre: genre,
      numPages: numberPages,
      price: price,
    });
    sendBook.save().then((doc) => {
      console.log(doc);
    });
  }
  res.end("Done");
};

module.exports = {
  handleRegister: handleRegister,
};
