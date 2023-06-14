const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to logout." });
    }

    res.clearCookie('accessToken');
    res.clearCookie('username');
    res.clearCookie('userId');
    res.clearCookie('roleId');

   

    return res.json({ message: "Logout successful." });

  });
});
module.exports = router;