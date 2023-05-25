const express = require('express');
const router = express.Router();
const connection = require('./db_connection');

router.get('/', (req, res) => {
  const searchTerm = req.query.term;

  const query = `SELECT * FROM libri WHERE Titulli LIKE '%${searchTerm}%'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing search query:', err);
      res.status(500).json({ error: 'An error occurred while searching' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;