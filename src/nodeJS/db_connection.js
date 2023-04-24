// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'octopus'
//   });
//   connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to database: ', err);
//       return;
//     }
//     console.log('Connected to database.');
//   });


//   connection.query('SELECT * FROM your_table_name', (err, results) => {
//     if (err) {
//       console.error('Error executing query: ', err);
//       return;
//     }
//     console.log('Query results: ', results);
//   });



// const mysql = require('mysql');
// Menyra e dyte
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'octopus',
// });

// connection.connect((err) => {
//   if (err) throw err;

//   console.log('Connected to MySQL server.');

//   // The code below closes the connection to MySQL server

//   connection.end((err) => {
//     if (err) throw err;

//     console.log('Connection to MySQL server closed.');
//   });
// });

//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM biblioteka", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
