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
      res.sendStatus(500);
    } else {
      res.clearCookie('accessToken');
      res.sendStatus(200);  // Optional: Clear the access token cookie if it exists
      
    }
  });
});


module.exports = router;