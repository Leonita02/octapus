const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/',(req,res)=>{

  res.clearCookie('token');

  return res.json({ Status: 'Success' });
});


module.exports = router;