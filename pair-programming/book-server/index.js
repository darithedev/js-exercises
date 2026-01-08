import express from 'express';
import BOOKS from './books.js'

const app = express();
const PORT = 3000;

// console.log("Books")
// console.log(BOOKS);
app.get('/books', (req, res) => {
    res.json(BOOKS);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});