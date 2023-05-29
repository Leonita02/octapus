const express=require('express');
const router=express.Router();
const connection=require('./db_connection');


router.get("/", (req, res) => {
    const sql = "SELECT * FROM libri WHERE Zhanri = 'Romance'";
    connection.query(sql, (err, data) => {
      if (err) {
        console.log("Error:", err); // Log the error message
        return res.json("Error");
      }
      return res.json(data);
    });
  });

module.exports = router;