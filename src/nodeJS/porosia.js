const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get("/",(req,res)=>{
    const sql = "SELECT * FROM biblioteka_furnitori";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })


  router.post("/", (req, res) => {
    const sql = `INSERT INTO biblioteka_furnitori (Biblioteka_ID, Menaxheri, Furnitori, Porosia) VALUES ('${req.body.numriBibliotekes}','${req.body.menaxheri}','${req.body.furnitori}','${req.body.porosia}')`;
    connection.query(sql, (err, data) => {
      if (err) {
        console.log(err); 
        return res.status(500).json({ error: " while inserting the book." });
      }
      return res.json(data);
    });
  });

  module.exports = router;

 









