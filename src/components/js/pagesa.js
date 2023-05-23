import React from 'react';
import Nav from '../js/nav';
import Payment from '../css/pagesa.css';

function Pagesa() {
    return (
        <>
            <div><Nav /></div>
            

           <div className="order">
            <h2>Porosite tenden</h2>
            <h3>Plotësoni informatat e kërkuara për të porositur atë qka dëshironi</h3>
            <div className="row">
            <div className="col-75">
            <div className="container">
            <div className="row">

            <div className="col-50">
            <h3>Informatat rreth porosisë</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Emri dhe Mbiemri:</label>
              <input type="text" id="fname" name="firstname" placeholder="" />
              <label htmlFor="email"><i className="fa fa-envelope"></i> Email:</label>
              <input type="text" id="email" name="email" placeholder=""/>
              <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Adresa:</label>
              <input type="text" id="adr" name="address" placeholder=""/>
              <label htmlFor="city"><i className="fa fa-institution"></i> Qyteti:</label>
              <input type="text" id="city" name="city" placeholder=""/>

              <div className="row">
              <div className="col-50">
              <label htmlFor="state">Shteti:</label>
                  <input type="text" id="state" name="state" placeholder=""/>
              </div>
              <div className="col-50">
                  <label htmlFor="zip">Zip Kodi:</label>
                  <input type="text" id="zip" name="zip" placeholder=""/>
                </div>
              </div>
              </div>

              <div className="col-50">
              <h3>Pagesa:</h3>
              <label htmlFor="fname"></label>
              <div className="icon-container">
                <i className="fa fa-cc-visa" style={{color: 'navy'}}></i>
                <i className="fa fa-cc-amex" style={{color: 'blue'}}></i>
                <i className="fa fa-cc-mastercard" style={{color: 'red'}}></i>
                <i className="fa fa-cc-discover" style={{color: 'orange'}}></i> 
            </div>
              <label htmlFor="cname">Emri i Kartelës:</label>
              <input type="text" id="cname" name="cardname" placeholder=""/>
              <label htmlFor="ccnum">Numri i kredit-kartelës:</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder=""/>
              <label htmlFor="expmonth">Muaji i skadencës:</label>
              <input type="text" id="expmonth" name="expmonth" placeholder=""/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Viti i skandencës:</label>
                  <input type="text" id="expyear" name="expyear" placeholder=""/>
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">Sasia:</label>
                  <input type="text" id="cvv" name="cvv" placeholder=""/>
                </div>
              </div>

            </div>
            </div>

            <label>
            <input type="checkbox" name="sameadr" />
            </label>
            <br></br>
          <input type="submit" value="Konfirmo porosinë" className="btn"/>
            </div>
            </div>
            </div>
  
            </div>
        </>
    )
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



