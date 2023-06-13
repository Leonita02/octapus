const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get('/:id', (req, res) => {
  const bookId = req.params.id;

  // Query the database to fetch the book details
  const query = `SELECT * FROM libri WHERE Isbn = ${bookId}`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const book = results[0];
      res.json(book);
    }
  });
});

router.post("/", (req, res) => {
  const { userId,id } = req.body;

  // Ensure that the userId is received correctly
  console.log("userId from request body:", userId);// Access the user ID from cookies

  // Perform the necessary logic with the retrieved userId

  // Example: Insert the values into the wishlist table using SQL query
  const sql = "INSERT INTO rezervimet (Isbn,Useri_ID) VALUES (?, ?)";
  const values = [id, userId];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error inserting into rezervimet" });
    }
    return res.json({ message: "Rezervimi item added successfully" });
  });
});






module.exports=router;