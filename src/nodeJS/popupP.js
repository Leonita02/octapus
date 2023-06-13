const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.get('/', (req, res) => {
  const userId = req.query.userId;

  // Perform the database query to fetch the necessary data
  const query = "select pg.Data_Pageses from personi p inner join useri u on p.Personi_ID=u.Personi_ID inner join pagesa pg on pg.Personi_ID=p.Personi_ID and u.Useri_ID=?";
  const values = [userId];

  // Execute the query
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      if (result.length > 0) {
        const paymentDate = result[0].Data_Pageses;
        res.json({ paymentDate });
      } else {
       
        const message = "There is no payment from this person.";
        res.json({ message });
      }
    }
  });
});

module.exports=router;