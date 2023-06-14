const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.get('/', (req, res) => {
  const userId = req.query.userId;

 
  const query = "select m.Status from menaxhimi_pushimeve m inner join useri u on u.Useri_ID=m.Useri_ID and m.Useri_ID=?";
  const values = [userId];


  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      if (result.length > 0) {
        const status = result[0].Status;
        res.json({ status });
      } else {
       
        const message = "There is no status for this person.";
        res.json({ message });
      }
    }
  });
});

module.exports=router;