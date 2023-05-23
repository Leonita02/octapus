
const express = require('express');
const session = require('express-session');
const router = express.Router();

// Configure session middleware
router.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  })
);

// Define the route to check session status
// router.get('/', (req, res) => {
//   if (req.session && req.session.username) {
//     res.json({ status: 'authenticated' });
//   } else {
//     res.json({ status: 'unauthenticated' });
//   }
// });
router.get('/', (req, res) => {
    if (req.session && req.session.username) {
      res.json({ isLoggedIn: true, username: req.session.username });
    } else {
      res.json({ isLoggedIn: false, username: null });
    }
  });
  
  module.exports = router;

module.exports = router;