const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const jwt = require('jsonwebtoken');
const session = require('express-session');
router.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        maxAge: 3600000,
      },
    })
  );

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
    console.log('Query:', query); // Log the query
  
    connection.query(query, (error, data) => {
      if (error) {
        console.error('Error:', error); // Log the error
        res.status(500).json({ message: 'Error logging in' });
      } else if (data.length === 0) {
        res.status(401).json({ message: 'Invalid email or password' });
      } else {
        const user = data[0];
        // Store user information in the session
        req.session.user = {
          id: user.id,
          role: user.Roli_ID
        };
        res.json({
          role: user.Roli_ID
        });
      }
    });
  });

module.exports = router;


// nese dojm me bo me cookie edhe ktu duhet qeshtu me ja bo 
// const express = require('express');
// const router = express.Router();
// const connection = require('./db_connection');
// const jwt = require('jsonwebtoken');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');

// router.use(
//   session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: false,
//       maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
//     },
//   })
// );

// router.use(cookieParser());

// router.post('/', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
//   console.log('Query:', query); // Log the query

//   connection.query(query, (error, data) => {
//     if (error) {
//       console.error('Error:', error); // Log the error
//       res.status(500).json({ message: 'Error logging in' });
//     } else if (data.length === 0) {
//       res.status(401).json({ message: 'Invalid email or password' });
//     } else {
//       const user = data[0];
//       const token = jwt.sign({ userId: user.id, role: user.Roli_ID }, 'your-secret-key', { expiresIn: '1d' });

//       // Set the token as a cookie
//       res.cookie('token', token, {
//         httpOnly: true,
//         secure: false, // Set it to true if using HTTPS
//         maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
//       });

//       res.json({
//         role: user.Roli_ID,
//       });
//     }
//   });
// });

// module.exports = router;