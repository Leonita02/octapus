const express=require('express')
const router=express.Router()
const connection=require('./db_connection')


router.get("/", (req, res) => {
  const userId = req.query.userId; // Retrieve the userId from the query parameters

  // Perform the necessary logic to fetch the wishlist data based on userId

  const sql = "SELECT u.Username , w.Titulli , w.Autori FROM WishList w inner join Useri u ON w.Useri_ID=u.Useri_ID and w.Useri_ID = ?";
  const values = [userId];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error retrieving wishlist" });
    }
    return res.json(data);
  });
});
  router.post("/", (req, res) => {
    const { titulli, autori, userId } = req.body;

    // Ensure that the userId is received correctly
    console.log("userId from request body:", userId);// Access the user ID from cookies
  
    // Perform the necessary logic with the retrieved userId
  
    // Example: Insert the values into the wishlist table using SQL query
    const sql = "INSERT INTO wishlist (Titulli, Autori, Useri_ID) VALUES (?, ?, ?)";
    const values = [titulli, autori, userId];
  
    connection.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error inserting into wishlist" });
      }
      return res.json({ message: "Wishlist item added successfully" });
    });
  });

router.put('/:id', (req, res) => {
  const sql = "UPDATE wishList SET `Titulli` = ?, `Autori` = ? WHERE `Wish_ID` = ?";
  const values = [
    req.body.titulli,
    req.body.autori,
    req.params.id
  ];
  connection.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

  
  router.delete('/:id', (req, res) => {
    const sql = "DELETE FROM WishList WHERE Wish_ID=?";
  
    const id = req.params.id;
    connection.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    })
  }
  )

  module.exports = router;