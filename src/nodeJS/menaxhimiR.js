//menaxhimi pushimeve metoda update per reject 
const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.put("/:id", (req, res) => {
    const hId = req.params.id;
    const { status } = req.body;
  
    // Update the status in the database based on the ID
    const sql = 'UPDATE menaxhimi_pushimeve SET Status = ? WHERE MP_ID = ?';
    connection.query(sql, [status, hId], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error while updating the response" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No rows were updated." });
      }
  
      return res.json({ message: "Status successfully updated." });
    });
  });

  module.exports=router;