const express=require('express');
const router=express.Router();
const connection=require('./db_connection');

// Check if the entered password matches the password in the database
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  const sql = "SELECT `Password` FROM useri WHERE `Useri_ID` = ?";
  connection.query(sql, [userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error while retrieving the password" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const password = result[0].Password;
    return res.json({ password });
  });
});

//Change the password
router.put('/:id', (req, res) => {
    const hId = req.params.id;
    const { confirm_Password } = req.body;
    
    const sql = "UPDATE useri SET `Password` = ? WHERE `Useri_ID` = ?";

   console.log(sql);
   connection.query(sql, [confirm_Password, hId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Gabime gjatë ndërrimit të fjalëkalimit!" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No rows were updated." });
    }

    return res.json({ message: "Fjalëkalimi është ndërruar me sukses!" });
  });
});

  module.exports = router;