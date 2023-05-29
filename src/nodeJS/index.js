require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const stripeCon = require ('./Stripe/StripeCon');
const connection = require('./db_connection');
const personiRoute = require('./personi');
const libriRoute = require('./libri');
const wishListRoute = require('./wishList');
const clientRepoRoute = require('./clientRepo');
const loginRoute = require('./login');
const punetoriRoute = require('./punetori');
const menaxheriRoute = require('./menaxheri');

app.use(cors());
app.use(express.json());
app.use('/personi', personiRoute);
app.use('/libri', libriRoute);
app.use('/wishList', wishListRoute);
app.use('/clientRepo', clientRepoRoute);
app.use('/login', loginRoute);
app.use('/punetori', punetoriRoute);
app.use('/menaxheri', menaxheriRoute);
app.use('/StripeCon',stripeCon);
app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});
