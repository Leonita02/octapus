const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get("/", (req, res) => {
  const userId = req.query.userId; // Retrieve the userId from the query parameters

  // Perform the necessary logic to fetch the wishlist data based on userId

  const sql = "select p.Personi_ID,lx.ID,l.Titulli,l.Autori ,l.Zhanri,l.Url from Personi p inner join Useri u on u.Personi_ID=p.Personi_ID inner join libri_lexuesi lx on lx.Personi_ID=p.Personi_ID inner join Libri l on l.Isbn=lx.Isbn and u.Useri_ID=?";
  const values = [userId];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error retrieving wishlist" });
    }
    return res.json(data);
  });
});

module.exports=router;