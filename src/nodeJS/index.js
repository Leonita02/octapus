require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const StripeCon = require ('./Stripe/StripeCon');

const storeItems = new Map([
  [1,{priceInCents:10000,name:"Learn React"}],
  [2,{priceInCents:20000,name:"Learn NodeJS"}]
])

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
app.use(express.json());
app.use('/personi', personiRoute);
app.use('/libri', libriRoute);
app.use('/wishList', wishListRoute);
app.use('/clientRepo', clientRepoRoute);
app.use('/login',loginRoute);
app.use('/punetori',punetoriRoute);
app.use('/menaxheri',menaxheriRoute);
app.use('/StripeCon', StripeCon);



app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});



//This has been cut from package.json
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "nodemon db_connection.js"