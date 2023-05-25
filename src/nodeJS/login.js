// const express = require('express');
// const router = express.Router();
// const connection = require('./db_connection');
// const jwt = require('jsonwebtoken');
// const session = require('express-session');
// router.use(
//     session({
//       secret: 'your-secret-key',
//       resave: false,
//       saveUninitialized: true,
//       cookie: {
//         secure: false,
//         maxAge: 3600000,
//       },
//     })
//   );

// router.post('/', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
  
//     const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
//     console.log('Query:', query); // Log the query
  
//     connection.query(query, (error, data) => {
//       if (error) {
//         console.error('Error:', error); // Log the error
//         res.status(500).json({ message: 'Error logging in' });
//       } else if (data.length === 0) {
//         res.status(401).json({ message: 'Invalid email or password' });
//       } else {
//         const user = data[0];
//         // Store user information in the session
//         req.session.user = {
//           id: user.id,
//           role: user.Roli_ID
//         };
//         res.json({
//           role: user.Roli_ID
//         });
//       }
//     });
//   });

// module.exports = router;


// nese dojm me bo me cookie edhe ktu duhet qeshtu me ja bo 
// const express = require('express');
// const router = express.Router();
// const connection = require('./db_connection');
// const jwt = require('jsonwebtoken');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const bodyParser = require('body-parser');



// router.use(
//   session({
//     secret: 'ekipa-shkaterruese',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: false,
//       maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
//     },
//   })
// );

// router.use(cookieParser());
// router.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
const express = require('express');
const router = express.Router();
const connection = require('./db_connection');





// router.post('/', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
  
//     const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
//     console.log('Query:', query);
//     connection.query(query,[req.body.username,req.body.password],(err,result)=>{
//       if(err) return res.json({Message:'Error inside server'});
//       if(result.length>0){
//         req.session.username=result[0].Username;
//         console.log(req.session.username);
//         return res.json({Login:true})
//       }else{
//         return res.json({Login:false})
//       }
//     }
//     )
  
//   })
router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
  console.log('Query:', query);
  connection.query(query, [req.body.username, req.body.password], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    if (result.length > 0) {
      req.session.username = result[0].Username;
      console.log('Session:', req.session); // Log the session object
      return res.json({ Login: true });
    } else {
      return res.json({ Login: false });
    }
  });
});



// Now you can access the username in any route handler
router.get('/', (req, res) => {
  console.log('GET request received');
  console.log('Session:', req.session);
  console.log('Username:', req.session.username);

  if (req.session.username) {
    res.json({ Login: true, username: req.session.username });
  } else {
    res.json({ Login: false, username: null });
  }
});

  // router.get('/', (req, res) => {
    // if (req.session.username ) {
    //   res.json( {valid:true, username: req.session.username} );
    // } else {
    //   res.json({valid: false, username: null });
    // }

    // router.get('/', (req, res) => {
    //   if (req.session.username) {
    //     res.json({ isLoggedIn: true, username: req.session.username });
    //   } else {
    //     res.json({ isLoggedIn: false, username: null });
    //   }
    // });

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
//       const token = jwt.sign(
//         { userId: user.Useri_ID, role: user.Roli_ID },
//         'ekipa-shkaterruese',
//         { expiresIn: '1d' }
//       );

//       // Set the session information
//       req.session.username = user.Username;
//       req.session.role = user.Roli_ID;

//       // Set the token as a cookie
//       res.cookie('token', token, {
//         httpOnly: true,
//         secure: false, // Set it to true if using HTTPS
//         maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
//       });
//       console.log('Token:', token);

//       res.json({
//         role: user.Roli_ID,
//       });
//     }
//   });
// });





module.exports = router;
// router.get('/', (req, res) => {
//   const username = req.session.username ; // Set a session variable
//   res.send('Session started');
//   // if (req.session && req.session.username) {
//   //   res.json({ isLoggedIn: true, username: req.session.username });
//   // } else {
//   //   res.json({ isLoggedIn: false, username: null });
//   // }
// });