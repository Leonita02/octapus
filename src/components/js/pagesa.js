import React, { useEffect } from 'react';
import Nav from '../js/nav';
import Payment from '../css/pagesa.css';
import { useNavigate } from 'react-router';
import { handleButtonClick } from './pagesaStripe'; 
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useCookies} from 'react-cookie';
import "bootstrap/dist/css/bootstrap.min.css";

function Pagesa() {
  const navigate = useNavigate();
  function navigateToPagesa() {
    navigate('/logIn');
  }

  const [pagesat, setPagesat] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/stripe')
      .then(res => setPagesat(res.data))
      .catch(err => console.log(err));
  }, []);

  const [cookies] = useCookies(['userId', 'roleId']);
  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  if (!isAuthorized([ '1','2','3'])) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <br />
      <br />
      <br />

      <h2>Historia e Pagesave</h2>

      <table>
        <thead>
          <tr>
            <th>Pagesa_ID</th>
            <th>Qyteti</th>
            <th>Emri i Karteles</th>
            <th>Numri i Karteles</th>
            <th>Data Pageses</th>
            <th>Person_ID</th>
          </tr>
        </thead>
        <tbody>
          {pagesat.map((pagesa) => (
            <tr key={pagesa.Pagesa_ID}>
              <td>{pagesa.Pagesa_ID}</td>
              <td>{pagesa.qyteti}</td>
              <td>{pagesa.emriKarteles}</td>
              <td>{pagesa.nrKarteles}</td>
              <td>{pagesa.data_pageses}</td>
              <td>{pagesa.Personi_ID}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Paguani me formën më të shpejtë!</h3>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Paguaj
      </button>
    </>
  );
}

export default Pagesa;


// onClick={valido()}
// function valido(){
//     var fname = document.getElementById('fname').value
//     var email = document.getElementById('email').value;
//     var adr = document.getElementById('adr').value;
//     var city = document.getElementById('city').value;
//     var state = document.getElementById('state').value;
//     var zip = document.getElementById('zip').value;
//     var cname = document.getElementById('cname').value;
//     var ccnum = document.getElementById('ccnum').value;
//     var expmonth = document.getElementById('expmonth').value;
//     var expyear = document.getElementById('expyear').value;
//     var cvv = document.getElementById('cvv').value;


//     var fnameRegex = /^[a-zA-Z]+$/;
//     if(fname == '' ){
//         alert("Ju lutem plotsoni emrin!");
//         return;         // qikjo return se len me vazhdu,perderisa se ka plotsu emrin, ska nevoj me kqyr ma tutje
//     }
//     if(!fnameRegex.test(fname)) {
//         alert("Emri nuk duhet te permbaje numra");
//         return;         //teston nese eshte e sakte permbajtja e emrit,nese jo jep alert
//     }


//     //rules for email
//     var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(email == ''){
//         alert("Ju lutem plotsoni email-in!");
//         return;
//     }
//     if(!emailRegex.test(email)){
//         alert("Email adresa nuk eshte valide!");
//         return;
//     }


//     //rules for address
//     var addressRegex = /^[A-Za-z0-9]{1,}$/;
//     if(adr == ''){
//         alert("Ju lutem plotsoni Adresen tuaj!");
//         return;
//     }
//     if(!addressRegex.test(adr)){
//         alert("Adresa juaj nuk eshte valide!");
//         return;
//     }

//       //rules for city
//     var cityRegex =/^[a-zA-Z]+$/;
//     if(city == ''){
//         alert("Ju lutem plotsoni Qytetin tuaj!");
//         return;
//     }
//     if(!cityRegex.test(city)){
//         alert("Emri i Qytetit tuaj nuk eshte valid!");
//         return;
//     }
  
  
//       //rules for state
//       var stateRegex = /^[a-zA-Z]+$/;
//       if(state == ''){
//         alert("Ju lutem plotsoni Shtetin tuaj!");
//         return;
//     }
//      if(!stateRegex.test(state)){
//         alert("Emri i Shtetin tuaj nuk eshte valid!");
//         return;
//      }

//       //rules for zipcode
//       var zipRegex = /^[0-9]{1,}$/;
//       if(zip == ''){
//         alert("Ju lutem plotsoni Zip Kodin tuaj!");
//         return;
//     }
//      if(!zipRegex.test(zip)){
//         alert("Zip Kodi juaj nuk eshte valid!");
//         return;
//      }
    
//        //rules for cardName
//        var cnameREGEX=/^[A-Za-z]{1,}$/;
//        if(cname == ''){
//         alert("Ju lutem plotsoni Emrin e Karteles tuaj!");
//         return;
//     }
//      if(!cnameREGEX.test(cname)){
//         alert("Emri i karteles tuaj nuk eshte valide!");
//         return;
//      }

//           //rules for cardNumber
//          var ccnumREGEX=/^[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{10}$/;
//          if(ccnum == ''){
//             alert("Ju lutem plotsoni Numrin e Karteles tuaj!");
//             return;
//         }
//          if(!ccnumREGEX.test(ccnum)){
//             alert("Numri i karteles tuaj nuk eshte valid!");
//             return;
//          }

        
//          //rules for expireMonth
//          var expmonthREGEX=/^[0-9]{2}$/;
   
//          if(expmonth == ''){
//             alert("Ju lutem plotsoni Muajin e Skadences!");
//             return;
//         }
//          if(!expmonthREGEX.test(expmonth)){
//             alert("Muaji i skadences tuaj nuk eshte valid!");
//             return;
//          }

//             //rules for expireYear
//          var expyearREGEX=/^[0-9]{4}$/;
//          if(expyear == ''){
//             alert("Ju lutem plotsoni Vitin e Skadences!");
//             return;
//         }
//          if(!expyearREGEX.test(expyear)){
//             alert("Viti i Skadences nuk eshte valid!");
//             return;
//          }



//              //rules for orderNumber
//          var cvvREGEX=/^[0-9a-zA-Z]{1,}$/;
//          if(cvv == ''){
//             alert("Ju lutem plotsoni Numrin e Porosise!");
//             return;
//         }
//          if(!cvvREGEX.test(cvv)){
//             alert("Numri i Porosise suaj nuk eshte valid!");
//             return;
//          }
      
//          alert("Porosia juaj u realizua me sukses!");

     
//     }



