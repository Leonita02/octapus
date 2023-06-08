const express=require('express')
const router=express.Router()
const connection=require('./db_connection')

router.get("/",(req,res)=>{
    const sql = "SELECT p.Personi_ID, CONCAT(p.Emri, ' ', p.Mbiemri) AS Lexuesi, l.Isbn, l.Titulli, l.Autori, lx.Data_Marrjes, lx.Data_Kthimit, lx.Statusi,lx.ID FROM libri_lexuesi lx INNER JOIN personi p ON lx.Personi_ID = p.Personi_ID INNER JOIN libri l ON l.Isbn = lx.Isbn;";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

router.post("/", (req, res) => {
    const sql = `INSERT INTO libri_lexuesi (Data_Marrjes, Data_Kthimit, Personi_ID, Isbn) VALUES ('${req.body.dataHuazimit}', '${req.body.dataKthimit}', '${req.body.personi}', '${req.body.isbn}')`;
    connection.query(sql, (err, data) => {
      if (err) {
        console.log(err); 
        return res.status(500).json({ error: "Error while inserting the borrowed book." });
      }
      return res.json(data);
    });
  });
  
  

  router.put("/:id", (req, res) => {
    const hId = req.params.id;
    const { status } = req.body;
  
    // Update the status in the database based on the ID
    const sql = 'UPDATE libri_lexuesi SET Statusi = ? WHERE ID = ?';
    connection.query(sql, [status, hId], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error while updating the borrowed book." });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No rows were updated." });
      }
  
      return res.json({ message: "Book successfully updated." });
    });
  });




  module.exports = router;