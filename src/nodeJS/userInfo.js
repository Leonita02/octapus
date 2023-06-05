const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

// router.get('/:id', (req, res) => {
//   const userId = req.cookies.userId;

//   // Query the database to fetch the user details using parameterized query
//   const query = `SELECT * FROM Personi p INNER JOIN Useri u ON p.Personi_ID = u.Personi_ID AND u.Useri_ID = ?`;

//   connection.query(query, [userId], (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       const user = results[0];
//       res.json(user);
//     }
//   });
// });
router.get('/:id', (req, res) => {
  const userId = req.params.id; // Use req.params.id instead of req.cookies.userId

  console.log("Received userId:", userId); // Log the received userId

  // Query the database to fetch the user details using parameterized query
  const query = `SELECT * FROM Personi p INNER JOIN Useri u ON p.Personi_ID = u.Personi_ID AND u.Useri_ID = ?`;

  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log("Query results:", results); // Log the query results

      res.json(results);
    }
  });
});
module.exports=router;