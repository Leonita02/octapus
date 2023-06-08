const express = require('express');
const router = express.Router();
const connection = require('./db_connection');


router.post("/personat/:email", (req, res) => {

  console.log("erdh te endpointi i pagesave!", { params: req.params, body: req.body });

  const { email: p_email } = req.params;
  const { qyteti } = req.body;
  const {shuma} = req.body;

  console.log({ email: p_email, qyteti });

  const sqlProcedureCommand = `CALL save_payment(?, ?,?)`;

  connection.query(sqlProcedureCommand, [p_email, qyteti,shuma], (err, results) => {
    if (err) {
      console.log('Error:', err); // log the error, if any
      return res.json({ succeeded: false, message: "Email nuk ekziston!" });
    }
    console.log('results:', results); // log the query results
    return res.json({ succeeded: true, message: "Payment completed successfully!" });
  });
});

router.get("/",(req,res)=>{
  
  const sql = "select * from Personi p inner join Pagesa pg on pg.Personi_ID=p.Personi_ID ";


  connection.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error retrieving pagesa" });
    }
    return res.json(data);
  });
});

module.exports = router;