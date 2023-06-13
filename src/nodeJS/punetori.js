const express=require('express');
const router=express.Router();
const connection=require('./db_connection');
const bcrypt = require('bcrypt');




// router.post("/", (req, res) => {
//     const { emri, mbiemri, email, datelindja, qyteti,paga, nr_tel, username, password } = req.body;
//     // Kodi per mos me pas username te njejt 
//     // const q = 'SELECT *  FROM useri WHERE username=?'
//     // connection.query(q,[req.body.username],(err,data)=>{
//     //   if(err)return res.status(500).json(err)
//     //   if(data.length)return res.status(409).json("User alreay exists")
//     // })

//     const sqlProcedureCommand = `CALL register_new_employee(?, ?, ?, ?, ?, ?, ?, ?,?)`;
//     console.log('req.body:', req.body); // log the request body
//     connection.query(sqlProcedureCommand, [emri, mbiemri, email, datelindja, qyteti,paga, nr_tel, username, password], (err, results) => {
//           if (err) {
//               console.log('Error:', err); // log the error, if any
//               return res.json("Error");
//           }
//           console.log('results:', results); // log the query results
//           return res.json(results);
//       });
//   });
  router.get("/",(req,res)=>{
    const sql = "SELECT p.Personi_ID,p.Emri,p.Mbiemri,p.Email,p.Datelindja,p.Qyteti,p.Paga,p.Nr_Tel,u.username FROM Personi p inner join Useri u ON p.Personi_ID=u.Personi_ID and u.Roli_ID=3";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

  router.post("/", async (req, res) => {
    const { emri, mbiemri, email, datelindja, qyteti,paga, nr_tel, username, password } = req.body;
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10 rounds
      
      console.log({hashedPassword})
  
      const sqlProcedureCommand = `CALL register_new_employee(?, ?, ?, ?,?, ?, ?, ?, ?)`;
      
      connection.query(sqlProcedureCommand, [emri, mbiemri, email, datelindja, qyteti,paga, nr_tel, username, hashedPassword], (err, results) => {
        if (err) {
          console.log('Error:', err); // log the error, if any
          return res.json("Error");
        }
        
        console.log('results:', results); // log the query results
        return res.json(results);
      });
    } catch (error) {
      console.log('Error:', error); // log the error, if any
      return res.json("Error");
    }
  });

  router.put('/:id', (req, res) => {
    const sql = "UPDATE personi p JOIN useri u ON p.Personi_ID = u.Personi_ID SET p.Emri = ?, p.Mbiemri = ?, p.Email = ?, p.Datelindja = ?, p.Qyteti = ?, p.Paga = ?, p.Nr_Tel = ? WHERE p.Personi_ID = ? AND u.Roli_ID=3";
    const values = [
      req.body.emri,
      req.body.mbiemri,
      req.body.email,
      req.body.datelindja,
      req.body.qyteti,
      req.body.paga,
      req.body.numri_telefonit,
      req.params.id
    ];
    connection.query(sql, values, (err, results) => {
      if (err) return res.json("Error");
      return res.json(results);
    });
  }); // me update ni row
  module.exports = router;