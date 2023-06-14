const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.get('/', (req, res) => {
  const userId = req.query.userId;

 
  const query = "SELECT lx.Data_Kthimit FROM Personi p INNER JOIN libri_lexuesi lx ON p.Personi_ID = lx.Personi_ID INNER JOIN useri u ON u.Personi_ID = p.Personi_ID AND u.Useri_ID = ? and (lx.Statusi='E huazuar' or lx.Statusi ='Rinovuar')";
  const values = [userId];


  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      if (result.length > 0) {
        const returnDate = result[0].Data_Kthimit;
        res.json({ returnDate });
      } else {
       
        const message = "There is no return date for this person.";
        res.json({ message });
      }
    }
  });
});

module.exports=router;