require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const StripeCon = require ('./Stripe/StripeCon');
const connection = require('./db_connection');
const personiRoute = require('./personi');
const libriRoute = require('./libri');
const wishListRoute = require('./wishList');
const clientRepoRoute = require('./clientRepo');
const loginRoute = require('./login');
const punetoriRoute = require('./punetori');
const menaxheriRoute = require('./menaxheri');
const logOutRoute = require('./logout');
const searchRoute=require('./search');
const bookPageRoute=require('./bookPage');
const romanceRoute = require('./LibriRomance');

app.use(cors());

//Dont use json body format for stripe api
app.use((req, res, next) => {
  if (req.originalUrl === "/stripe/api/webhook") {
    next();
  } else {
    express.json()(req, res, next);
  }
});


app.use('/personi', personiRoute);
app.use('/libri', libriRoute);
app.use('/wishList', wishListRoute);
app.use('/clientRepo', clientRepoRoute);
app.use('/login',loginRoute);
app.use('/punetori',punetoriRoute);
app.use('/menaxheri',menaxheriRoute);
app.use('/stripe', StripeCon);



app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});



//This has been cut from package.json
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "nodemon db_connection.js"