const express=require('express');
const router=express.Router();
const connection=require('./db_connection');


// router.post("/",(req,res)=>{
//     const sql = `INSERT INTO personi (Emri, Mbiemri, Email, Datelindja, Qyteti, Paga, Nr_Tel, Biblioteka_ID) VALUES ('${req.body.emri}','${req.body.mbiemri}','${req.body.email}','${req.body.datelindja}','${req.body.qyteti}','${req.body.paga}','${req.body.nrTelefonit}','${req.body.qendra}')`;
//     connection.query(sql, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
   
//   }
//   )


  
//Me insertu prej Sign Up for Client

// router.post("/", (req, res) => {
//   const { emri, mbiemri, email, datelindja, qyteti, nr_tel, username, password } = req.body;
//   const sqlProcedureCommand = `CALL register_new_user(?, ?, ?, ?, ?, ?, ?, ?)`;
//   connection.query(sqlProcedureCommand, [emri, mbiemri, email, datelindja, qyteti, nr_tel, username, password], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data)
//     });
//   });







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
          return res.json(data);
      });
  });

  module.exports = router;