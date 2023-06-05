const express = require('express');
const router = express.Router();
const connection = require('./db_connection');


router.post("/personat/:email", (req, res) => {

  console.log("erdh te endpointi i pagesave!", { params: req.params, body: req.body });

  const { email: p_email } = req.params;
  const { qyteti } = req.body;

  console.log({ email: p_email, qyteti });

  const sqlProcedureCommand = `CALL make_cash_payment_for_user(?, ?)`;

  connection.query(sqlProcedureCommand, [p_email, qyteti], (err, results) => {
    if (err) {
      console.log('Error:', err); // log the error, if any
      return res.json({ succeeded: false, message: err });
    }
    console.log('results:', results); // log the query results
    return res.json({ succeeded: true, message: "Payment completed successfully!" });
  });
});

module.exports = router;