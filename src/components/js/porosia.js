import React from 'react';
import Order from '../css/porosia.css';
import Nav from '../js/nav';
import Footer from '../js/footer';
function Porosia() {
  return (
    <>
    
   <div><Nav/></div>
   <br></br>
   <br></br>
   <br></br>
      <div className="container">
        <h1>Porosia e Librave</h1>

        <div className="user-details">
          <div className="input-box">
            <span className="details">Titulli i Librit</span>
            <input type="text" placeholder="Shto Titullin" id="emri" />
          </div>

          <div className="input-box">
            <span className="details">Autori</span>
            <input type="text" placeholder="Shto Autorin" id="mbiemri" />
          </div>

          <div className="input-box">
            <span className="details">Sasia</span>
            <input type="number" placeholder="Shto Sasinë e Librit" id="nr" />
          </div>

          <div className="input-box">
            <span className="details">Isbn</span>
            <input type="text" placeholder="Shto Isbn" id="cardN" />
          </div>

          <div className="input-box">
            <span className="details">Biblioteka</span>
            <input type="text" placeholder="Adresa-Qendra" id="address" />
          </div>

          <div>
            <center>
              <input type="submit" value="Porosit" className="button" onclick="valido()" />
            </center>
          </div>
        </div>
      </div>

      {/* <script>
        function valido() {
            var numri = document.getElementById("nr").value;
            var cardRegex = /^[0-9]{16}$/
            var cardNumber = document.getElementById("cardN").value;
            var adressRegex = /^[a-zA-Z]{5,30}$/
            var adress = document.getElementById("adress").value;
        
            if(!nameRegex.test(name)){
                    alert("Emri duhet te jete me i gjate se 3 karaktere!");
            }else if(!lnameRegex.test(lname)){
                alert("Mbiemri duhet te jete me i gjate se 4 karaktere!")
            }else if(!nr.test(numri)){
                alert("Numri duhet te jete me 9 karaktere!")
            }else if(!cardRegex.test(cardNumber)){
                alert("Shenoni numrin e cardes si duhet!")
            }else if(!adressRegex.test(adress)){
                alert("Shenoni Adresen tuaj!")
            } 
        }
        
      </script> */}
    </>
  );
}

export default Porosia;