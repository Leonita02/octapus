
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const connection = require('./db_connection');
const personiRoute = require('./personi');
const libriRoute = require('./libri');
const wishListRoute = require('./wishList');
const clientRepoRoute = require('./clientRepo');


app.use('/personi', personiRoute);
app.use('/libri', libriRoute);
app.use('/wishList', wishListRoute);
app.use('/clientRepo', clientRepoRoute);



app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});