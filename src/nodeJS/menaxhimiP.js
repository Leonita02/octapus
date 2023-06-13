const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get("/", (req, res) => {
    const sql = "SELECT k.MP_ID ,p.Emri, p.Mbiemri, k.Data_Fillimit, k.Data_Mbarimit, k.Arsyeja ,k.Status FROM menaxhimi_pushimeve k INNER JOIN useri u ON k.Useri_ID = u.Useri_ID INNER JOIN Personi p ON p.Personi_ID = u.Personi_ID";
  
    connection.query(sql, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error retrieving vacation data" });
      }
      return res.json(data);
    });
  });
  router.post("/", (req, res) => {
    const { dataFillimit, dataMbarimit,arsyeja, userId } = req.body;

    // Ensure that the userId is received correctly
    console.log("userId from request body:", userId);// Access the user ID from cookies
  
    // Perform the necessary logic with the retrieved userId
  
    // Example: Insert the values into the wishlist table using SQL query
    const sql = "INSERT INTO menaxhimi_pushimeve (Data_Fillimit, Data_Mbarimit,Arsyeja, Useri_ID) VALUES (?, ?, ?,?)";
    const values = [dataFillimit, dataMbarimit,arsyeja, userId];
  
    connection.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error inserting into menaxhimi" });
      }
      return res.json({ message: "Wishlist item added successfully" });
    });
  });
// metoda update per approve 
router.put("/:id", (req, res) => {
  const mId = req.params.id;
  const { status } = req.body;

  // Update the status in the database based on the ID
  const sql = 'UPDATE menaxhimi_pushimeve SET Status = ? WHERE MP_ID = ?';
  connection.query(sql, [status, mId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error while updating the status." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No rows were updated." });
    }

    return res.json({ message: "Status successfully updated." });
  });
});
  module.exports=router;