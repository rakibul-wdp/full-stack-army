const express = require("express");
const app = express();

app.use(express.json());

const books = [
  {
    id: "1",
    name: "HTML",
    price: 500,
  },
  {
    id: "2",
    name: "CSS",
    price: 700,
  },
  {
    id: "3",
    name: "JavaScript",
    price: 1000,
  }
]

app.get("/books", (req, res) => {
  if (req.query.query === 'all') {
    return res.json(books);
  }

  if (req.query.price === "500") {
    const result = books.filter(book => book.price === 500);
    return res.json(result);
  }

  if (req.query.price === "1000") {
    const result = books.filter(book => book.price === 1000);
    return res.json(result);
  }

  return res.json(books);
})

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);

  res.json(books);
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
})