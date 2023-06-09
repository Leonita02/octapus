const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.put("/:id", (req, res) => {
    const hId = req.params.id;
    const { status, returnDate } = req.body;
  
    // Convert returnDate to a Date object if it's not already
    const formattedDate = typeof returnDate === 'string' ? new Date(returnDate) : returnDate;

    if (isNaN(formattedDate)) {
      return res.status(400).json({ error: "Invalid return date." });
      
    }
    // Format the return date as yyyy-mm-dd
    const formattedDateString = formattedDate.toISOString().slice(0, 10);
  
    // Update the status and/or return date in the database based on the bookId
    const sql = `UPDATE libri_lexuesi SET Statusi = '${status}', Data_Kthimit = '${formattedDateString}' WHERE ID = ${hId}`;
    connection.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error while updating the book." });
      }
      return res.json(data);
    });
  });

  module.exports = router;