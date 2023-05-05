// const express=require('express')
// const router=express.Router()
// const connection=require('./db_connection')

// router.get("/",(req,res)=>{
//     const sql = "SELECT * FROM libri";
//     connection.query(sql,(err,data)=>{
//       if(err)return res.json("Error");
//       return res.json(data);
//     }
//     )
//   })


//   router.post("/", (req, res) => {
//     const sql = `INSERT INTO libri (Isbn, Titulli, Autori, Viti_Botimit, Shtepia_Botuese, Nr_Kopjeve, Pershkrimi, Url, Zhanri, Rafti_ID) VALUES ('${req.body.isbn}','${req.body.titulli}','${req.body.Autori}','${req.body.vitiBotimit}','${req.body.shtepiaBotimit}','${req.body.sasia}','${req.body.pershkrimi}','${req.body.url}','${req.body.zhanri}','${req.body.rafti}')`;
//     connection.query(sql, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
//   });


//   router.put('/:id', (req, res) => {
//     const sql = "UPDATE libri SET `Titulli` = ?, `Autori` = ?, `Viti_Botimit` = ?, `Shtepia_Botuese` = ?, `Nr_Kopjeve` = ?, `Pershkrimi` = ?, `Url` = ?, `Zhanri` = ?, `Rafti_ID` = ? WHERE `Isbn` = ?";
//     const values = [
//       req.body.titulli,
//       req.body.Autori,
//       req.body.vitiBotimit,
//       req.body.shtepiaBotimit,
//       req.body.sasia,
//       req.body.pershkrimi,
//       req.body.url,
//       req.body.zhanri,
//       req.body.rafti,
//       req.params.id
//     ];
//     connection.query(sql, values, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
//   });


//   router.delete('/:id',(req,res)=>{
//     const sql = "DELETE FROM libri WHERE Isbn=?";
   
//     const id = parseInt(req.params.id);
//     connection.query(sql,[id],(err,data )=>{
//       if(err) return res.json("Error");
//       return res.json(data);
//     })
//   }
//   )

//   module.exports = router;