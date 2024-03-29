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
// router.post('/', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
//   console.log('Query:', query);
//   connection.query(query, [req.body.username, req.body.password], (err, result) => {
//     if (err) return res.json({ Message: 'Error inside server' });
//     if (result.length > 0) {
//       req.session.username = result[0].Username;
//       console.log('Session:', req.session); // Log the session object
//       return res.json({ Login: true });
//     } else {
//       return res.json({ Login: false });
//     }
//   });
// });
const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// router.post('/', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const query = `SELECT * FROM useri WHERE username='${username}' AND password='${password}'`;
//   console.log('Query:', query);
//   connection.query(query, [req.body.username, req.body.password], (err, result) => {
//     if (err) return res.status(500).json(err);
//     if (result.length === 0) return res.status(404).json("User not found");

//     const token = jwt.sign(
//       { 
//         id: result[0].Useri_ID,
//       },
//       "secret-key"
//     );

//     res.cookie('accessToken', token, { httpOnly: true, secure: false, sameSite: 'none' });

//     // Store the accessToken in the session data
//     req.session.accessToken = token;
//     req.session.user = {
//       id : result[0].Useri_ID,
//       username: result[0].Username,
//       roleId: result[0].Roli_ID,
//       personiId : result[0].Personi_ID
//     };
//     console.log('Stored username:', result[0].Username);
//     console.log('Stored roleId:', result[0].Roli_ID);
//     console.log('Session:', req.session);

//     // Include userId in the response data
//     res.status(200).json({ username: result[0].Username, roleId: result[0].Roli_ID, userId: result[0].Useri_ID });
//   });
// });
router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('PAssword',password);
  
  const query = `SELECT * FROM useri WHERE username='${username}'`;
  console.log('Query:', query);
  
  connection.query(query, [req.body.username], async (err, result) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json(err);
    }
    
    if (result.length === 0) {
      console.log('User not found:', username);
      return res.status(404).json("User not found");
    }
    
    const dbPw = result[0].Password;
    console.log('Hashed password:', dbPw);

  
    const isPasswordValid = await bcrypt.compare(password, dbPw);

    const encryptedPw = await bcrypt.hash(password, 10);
    console.log({db: dbPw, password, encryptedPw });

    console.log('Is password valid:', isPasswordValid);
    
    if (isPasswordValid) {
      const token = jwt.sign(
        { 
          id: result[0].Useri_ID,
        },
        "secret-key"
      );
      
      res.cookie('accessToken', token, { httpOnly: true, secure: false, sameSite: 'none' });
      
      // Store the accessToken in the session data
      req.session.accessToken = token;
      req.session.user = {
        id: result[0].Useri_ID,
        username: result[0].username,
        roleId: result[0].Roli_ID,
        personiId: result[0].Personi_ID
      };
      console.log('Stored username:', result[0].username);
      console.log('Stored roleId:', result[0].Roli_ID);
      console.log('Session:', req.session);
      
      // Include userId in the response data
      res.status(200).json({ username: result[0].username, roleId: result[0].Roli_ID, userId: result[0].Useri_ID });
    } else {
      console.log('Invalid credentials:', username);
      res.status(401).json("Invalid credentials");
    }
  });
});



router.get('/', (req, res) => {
  const user = req.session.user;
  console.log('User object:', user); // Debug statement

  const roleId = user ? user.roleId : null;
  const userId = user ? user.id : null;

  res.json({ roleId, userId });
});
// router.get('/', (req, res) => {
//   const { username, roleId } = req.session;

//   res.json({ username, roleId });
// });







module.exports = router;
