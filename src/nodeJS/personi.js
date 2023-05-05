// const express=require('express')
// const router=express.Router()
// const connection=require('./db_connection')


// router.get("/",(req,res)=>{
//     const sql="SELECT * FROM personi";
//     connection.query(sql,(err,data)=>{
//       if(err)return res.json("Error");
//       return res.json(data);
//     }
//     )
//   }
//   )


//   router.post("/",(req,res)=>{
//     const sql = `INSERT INTO personi (Emri, Mbiemri, Email, Datelindja, Qyteti, Paga, Nr_Tel, Biblioteka_ID) VALUES ('${req.body.emri}','${req.body.mbiemri}','${req.body.email}','${req.body.datelindja}','${req.body.qyteti}','${req.body.paga}','${req.body.nrTelefonit}','${req.body.qendra}')`;
//     connection.query(sql, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
   
//   }
//   ) //per me i insertu te dhena ne tabele


//   router.put('/:id', (req, res) => {
//     const sql = "UPDATE personi SET `Emri` = ?, `Mbiemri` = ?, `Email` = ?, `Datelindja` = ?, `Qyteti` = ?, `Paga` = ?, `Nr_Tel` = ?, `Biblioteka_ID` = ? WHERE `Personi_ID` = ?";
//     const values = [
//       req.body.emri,
//       req.body.mbiemri,
//       req.body.email,
//       req.body.datelindja,
//       req.body.qyteti,
//       req.body.paga,
//       req.body.nrTelefonit,
//       req.body.qendra,
//       req.params.id
//     ];
//     connection.query(sql, values, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
//   }); // me update ni row

//   router.delete('/:id',(req,res)=>{
//     const sql = "DELETE FROM personi WHERE Personi_ID=?";
   
//     const id = req.params.id;
//     connection.query(sql,[id],(err,data )=>{
//       if(err) return res.json("Error");
//       return res.json(data);
//     })
//   }
//   )

//   module.exports = router;