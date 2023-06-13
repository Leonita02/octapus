const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.get("/",(req,res)=>{
    const sql = "select r.Id,CONCAT(p.Emri, ' ', p.Mbiemri) AS Lexuesi,l.Titulli,l.Autori,r.Status from Useri u inner join rezervimet r on u.Useri_ID=r.Useri_ID inner join libri l on l.Isbn=r.Isbn inner join personi p on p.Personi_ID=u.Personi_ID";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

  router.put("/:id", (req, res) => {
    const Id = req.params.id;
    const { status } = req.body;
  
    // Update the status in the database based on the ID
    const sql = 'UPDATE rezervimet SET Status = ? WHERE Id = ?';
    connection.query(sql, [status, Id], (err, result) => {
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


  module.exports = router;