const express=require('express');
const router=express.Router();
const connection=require('./db_connection');

//Marrja e te dhenave nga databaza per testim te Personi_ID
router.get('/', async (req, res) => {
    const { Personi_ID } = req.query;
  
    // Perform a database query to check if the Personi_ID exists in the personi table
    const personi = await Personi.findOne({
      where: {
        Personi_ID: Personi_ID,
      },
    });
    if (personi) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
});

//Ruajtja e te dhenave ne databaze
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