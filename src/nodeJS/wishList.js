// const express=require('express')
// const router=express.Router()
// const connection=require('./db_connection')


// router.get("/", (req, res) => {
//     const sql = "SELECT * FROM WishList";
//     connection.query(sql, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     }
//     )
//   }
//   )

//   router.post("/", (req, res) => {
//     const sql = `INSERT INTO wishlist (Titulli, Autori) VALUES (?, ?)`;
//     const values = [req.body.titulli, req.body.autori];
//     connection.query(sql, values, (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     });
//   });

  
//   router.delete('/:id', (req, res) => {
//     const sql = "DELETE FROM WishList WHERE Wish_ID=?";
  
//     const id = req.params.id;
//     connection.query(sql, [id], (err, data) => {
//       if (err) return res.json("Error");
//       return res.json(data);
//     })
//   }
//   )

//   module.exports = router;