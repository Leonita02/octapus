const express=require('express');
const router=express.Router();
const connection=require('./db_connection');



router.post("/", (req, res) => {
    const { Personi_ID,qyteti,email,emriKarteles,nrKarteles,data_pageses} = req.body;
  
    const sqlInsertCommand = `INSERT INTO pagesa (Personi_ID, qyteti, email, emriKarteles, nrKarteles, data_pageses) VALUES (?, ?, ?, ?, ?, ?)`;
   
  
    connection.query(
      sqlInsertCommand,
      [Personi_ID, qyteti, email, emriKarteles, nrKarteles, data_pageses],
      (err, results) => {
        if (err) {
          console.log('Error:', err);
          return res.json("Error");
        }
        console.log('results:', results);
        const successMessage = "Pagesa u krye me sukses";
        // return res.json(results);
        return res.json({ message: successMessage });
        
      }
    );
  });

  module.exports = router;