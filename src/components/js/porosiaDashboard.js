import "bootstrap/dist/css/bootstrap.min.css";
// import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";


function Pdashboard(){
  const [porosia,setPorosia] = useState([]) 
  useEffect(()=>{
    axios.get('http://localhost:8081/porosia')
    .then(res => setPorosia(res.data))
    .catch(err => console.log(err));

  }
  )
  
    return <>
    <br/>
    <br/>
    
     <div className="col-md-12 mt-5">
           <h1 className="text-center">Porositë e Librave</h1>
         </div> 
    <table class="table caption-top bg-white rounded mt-2">
    
    <thead>
    <tr>
              <th>Biblioteka</th>
              <th>Menaxheri</th>
              <th>Furnitori</th>
              <th>Porosia</th>
              
            </tr>
            </thead>
        <tbody>

        {porosia.map((data,i)=>{ // me i printu qato te dhena
       return(<tr key={i}>
                  <td>{data.Biblioteka_ID}</td>
                  <td>{data.Menaxheri}</td>
                  <td>{data.Furnitori}</td>
                  <td>{data.Porosia}</td>
                </tr>)
             })   
      }
  </tbody>
   
  </table>
  </>
  
}

export default Pdashboard;