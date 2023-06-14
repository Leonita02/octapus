const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get("/", (req, res) => {
 

  const sql = "SELECT * FROM WishList ";


  connection.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error retrieving wishlist" });
    }
    return res.json(data);
  });
});

module.exports=router;