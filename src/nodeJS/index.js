require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    name: 'accessToken',
    secret: 'ekipa-shkaterruese',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    },
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const StripeCon = require('./Stripe/StripeCon');
const connection = require('./db_connection');
const personiRoute = require('./personi');
const libriRoute = require('./libri');
const wishListRoute = require('./wishList');
const clientRepoRoute = require('./clientRepo');
const loginRoute = require('./login');
const punetoriRoute = require('./punetori');
const menaxheriRoute = require('./menaxheri');
const logOutRoute = require('./logout');
const searchRoute = require('./search');
const bookPageRoute = require('./bookPage');
const romanceRoute = require('./LibriRomance');
const userInfoRoute = require('./userInfo');
const pagesatRoute = require('./pagesaRepo');
const porosiaRoute = require('./porosia');
const menaxhimiPRoute=require('./menaxhimiP');
const huazimiRoute=require('./huazimi');
const renewRoute=require('./renew');
const historiaLRoute=require('./historiaLibrave');
const ChangePasswordRoute = require('./passwordChange');




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
app.use('/login', loginRoute);
app.use('/punetori', punetoriRoute);
app.use('/menaxheri', menaxheriRoute);
app.use('/stripe', StripeCon);
app.use('/logout', logOutRoute);
app.use('/search', searchRoute);
app.use('/bookPage', bookPageRoute);
app.use('/userInfo', userInfoRoute);
app.use('/LibriRomance', romanceRoute);
app.use('/huazimi',huazimiRoute);
app.use('/renew',renewRoute);
app.use('/pagesat',pagesatRoute);
app.use('/historiaLibrave',historiaLRoute);
app.use('/passwordChange',ChangePasswordRoute);


app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});



//This has been cut from package.json
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "nodemon db_connection.js"