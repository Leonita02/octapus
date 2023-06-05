const express=require('express');
const router=express.Router();
const connection=require('./db_connection');



router.post("/", (req, res) => {
    const { emri, mbiemri, email, datelindja, qyteti, nr_tel, username, password } = req.body;
    const sqlProcedureCommand = `CALL register_new_user(?, ?, ?, ?, ?, ?, ?, ?)`;
    console.log('req.body:', req.body); // log the request body
    connection.query(sqlProcedureCommand, [emri, mbiemri, email, datelindja, qyteti, nr_tel, username, password], (err, results) => {
          if (err) {
              console.log('Error:', err); // log the error, if any
              return res.json("Error");
          }
          console.log('results:', results); // log the query results
          return res.json(results);
      });
  });

  router.get("/",(req,res)=>{
    const sql = "SELECT p.Personi_ID,p.Emri,p.Mbiemri,p.Email,p.Datelindja,p.Qyteti,p.Nr_Tel,u.username FROM Personi p inner join Useri u ON p.Personi_ID=u.Personi_ID and u.Roli_ID=4";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

  module.exports = router;