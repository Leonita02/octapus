import React from 'react';
// import Order from '../css/porosia.css';
import Nav from '../js/nav';
import Footer from '../js/footer';
import { useState,  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Porosia() {

  const [numriBibliotekes,setnumriBibliotekes]=useState(0)
  const [menaxheri,setMenaxheri]=useState("")
  const [furnitori,setFurnitori]=useState("")
  const [porosia,setPorosia]=useState("")
  const navigate=useNavigate()

  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8081/porosia",{numriBibliotekes, menaxheri, furnitori,porosia})
    .then(res =>{
        console.log(res);
        navigate('/'); 
    }).catch(err => console.log(err));
}

  return (
    <>
    
 
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <form onSubmit={handleSubmit}>
   <div className="container">
  <h1>Porosia e Librave</h1>

  
  <div className="user-details">
  <div className="input-box">
    <label htmlFor="numriBibliotekes" className="form-label">Numri i Bibliotekes</label>
    <input type="number" className="form-control" id="numriBibliotekes" placeholder="Shto Numrin e Bibliotekes" onChange={e =>setnumriBibliotekes (e.target.value)}/>
  </div>

  <div className="input-box">
  <label htmlFor="menaxheri" className="form-label">Menaxheri</label>
  <input type="text" className="form-control" id="menaxheri" placeholder="Shto Menaxherin" onChange={e =>setMenaxheri (e.target.value)} />
</div>

<div className="input-box">
  <label htmlFor="furnitori" className="form-label">Furnitori</label>
  <input type="text" className="form-control" id="furnitori" placeholder="Shto Furnitorin" onChange={e =>setFurnitori (e.target.value)}  />
</div>

<div className="input-box">
  <label htmlFor="porosia" className="form-label">Porosia</label>
  <input type="text" className="form-control" id="porosia" placeholder="Shto Porosinë" onChange={e =>setPorosia (e.target.value)}  />
</div>
   <br/>

    <div>
      <center>
        <button type="submit" className="btn btn-primary">Porosit</button>
      </center>
    </div>
  </div>
</div>
  </form>
      
    </>
  );
}

export default Porosia;