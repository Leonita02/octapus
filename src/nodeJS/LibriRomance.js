const express = require('express');
const router = express.Router();
const connection = require('./db_connection');

router.get("/:genre", (req, res) => {
  const genre = req.params.genre;
  const sql = `SELECT * FROM libri WHERE Zhanri = '${genre}'`;
  connection.query(sql, (err, data) => {
    if (err) {
      console.log("Error:", err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

  // router.get('/:id', (req, res) => {
  //   const bookId = req.params.id;
  
  //   // Query the database to fetch the book details
  //   const query = `SELECT * FROM libri WHERE Isbn = ${bookId}`;
  
  //   connection.query(query, (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Internal server error' });
  //     } else {
  //       const book = results[0];
  //       res.json(book);
  //     }
  //   });
  // });


module.exports = router;