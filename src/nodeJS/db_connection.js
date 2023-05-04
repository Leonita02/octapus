const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { default: axios } = require('axios');
const app = express();

app.use(cors());
app.use(express.json());




const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'octopus'
  });


  app.get("/",(req,res)=>{
    const sql="SELECT * FROM personi";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  }
  ) // me i marr te dehnat nga tabelat -->per dashboard mi qit

  

  app.post("/create",(req,res)=>{
    const sql = `INSERT INTO personi (Emri, Mbiemri, Email, Datelindja, Qyteti, Paga, Nr_Tel, Biblioteka_ID) VALUES ('${req.body.emri}','${req.body.mbiemri}','${req.body.email}','${req.body.datelindja}','${req.body.qyteti}','${req.body.paga}','${req.body.nrTelefonit}','${req.body.qendra}')`;
    connection.query(sql, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
   
  }
  ) //per me i insertu te dhena ne tabele
  
  app.post("/createLibri", (req, res) => {
    const sql = `INSERT INTO libri (Isbn, Titulli, Autori, Viti_Botimit, Shtepia_Botuese, Nr_Kopjeve, Pershkrimi, Url, Zhanri, Rafti_ID) VALUES ('${req.body.isbn}','${req.body.titulli}','${req.body.Autori}','${req.body.vitiBotimit}','${req.body.shtepiaBotimit}','${req.body.sasia}','${req.body.pershkrimi}','${req.body.url}','${req.body.zhanri}','${req.body.rafti}')`;
    connection.query(sql, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });

  app.put('/update/:id', (req, res) => {
    const sql = "UPDATE personi SET `Emri` = ?, `Mbiemri` = ?, `Email` = ?, `Datelindja` = ?, `Qyteti` = ?, `Paga` = ?, `Nr_Tel` = ?, `Biblioteka_ID` = ? WHERE `Personi_ID` = ?";
    const values = [
      req.body.emri,
      req.body.mbiemri,
      req.body.email,
      req.body.datelindja,
      req.body.qyteti,
      req.body.paga,
      req.body.nrTelefonit,
      req.body.qendra,
      req.params.id
    ];
    connection.query(sql, values, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  }); // me update ni row

  // app.put('libri/updateLibri/:id', (req, res) => {
  //   const sql = "UPDATE libri SET  `Titulli` = ?, `Autori` = ?, `Viti_Botimit` = ?, `Shtepia_Botuese` = ?, `Nr_Kopjeve` = ?, `Pershkrimi` = ?, `Url` = ?, `Zhanri` = ?, `Rafti_ID` = ? WHERE `Isbn` = ?";
  //   const values = [
  //     req.body.isbn,
  //     req.body.titulli,
  //     req.body.Autori,
  //     req.body.vitiBotimit,
  //     req.body.shtepiaBotimit,
  //     req.body.sasia,
  //     req.body.pershkrimi,
  //     req.body.url,
  //     req.body.zhanri,
  //     req.body.rafti
     
  //   ];
  //   connection.query(sql, values, (err, data) => {
  //     if (err) return res.json("Error");
  //     return res.json(data);
  //   });
  // }); 
  app.put('/updateLibri/:id', (req, res) => {
    const sql = "UPDATE libri SET `Titulli` = ?, `Autori` = ?, `Viti_Botimit` = ?, `Shtepia_Botuese` = ?, `Nr_Kopjeve` = ?, `Pershkrimi` = ?, `Url` = ?, `Zhanri` = ?, `Rafti_ID` = ? WHERE `Isbn` = ?";
    const values = [
      req.body.titulli,
      req.body.Autori,
      req.body.vitiBotimit,
      req.body.shtepiaBotimit,
      req.body.sasia,
      req.body.pershkrimi,
      req.body.url,
      req.body.zhanri,
      req.body.rafti,
      req.params.id
    ];
    connection.query(sql, values, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });

  app.delete('/personi/:id',(req,res)=>{
    const sql = "DELETE FROM personi WHERE Personi_ID=?";
   
    const id = req.params.id;
    connection.query(sql,[id],(err,data )=>{
      if(err) return res.json("Error");
      return res.json(data);
    })
  }
  )

  app.delete('/libri/:id',(req,res)=>{
    const sql = "DELETE FROM libri WHERE Isbn=?";
   
    const id = parseInt(req.params.id);
    connection.query(sql,[id],(err,data )=>{
      if(err) return res.json("Error");
      return res.json(data);
    })
  }
  )
  

  app.get("/libri",(req,res)=>{
    const sql = "SELECT * FROM libri";
    connection.query(sql,(err,data)=>{
      if(err)return res.json("Error");
      return res.json(data);
    }
    )
  })

  // axios.get("/Libri")
  // .then(response => {
  //   const sql = "SELECT * FROM libri";
  //   connection.query(sql,(err,data)=>{
  //     if(err)return res.json("Error");
  //     return res.json(data);
  //   }
  //   )
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle the error
  //   console.error(error);
  // });

  app.listen(8081,()=>{
    console.log("Connected");
  })


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ', err);
      return;
    }
    console.log('Connected to database.');
  });

module.exports = connection;