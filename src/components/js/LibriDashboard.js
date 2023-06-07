import "bootstrap/dist/css/bootstrap.min.css";
// import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";


function Ldashboard(){
  const [libri,setLibri] = useState([]) 
  useEffect(()=>{
    axios.get('http://localhost:8081/libri')
    .then(res => setLibri(res.data))
    .catch(err => console.log(err));

  }
  )

  const handleDeleteL = async(Isbn)=>{
    try{
      await axios.delete('http://localhost:8081/libri/' + Isbn)
      window.location.reload()
    }catch(err){
      console.log(err);
    }
  }
  
    return <>
    <br/>
    <br/>
    
     <div className="col-md-12 mt-5">
     <button className="btn btn-primary text-white">
      <Link to={`/addBook`} className="text-white text-decoration-none">
        Shto Liber
      </Link>
    </button>
           <h1 className="text-center">Invertari i Librave</h1>
         </div> 
    <table class="table caption-top bg-white rounded mt-2">
    
    <thead>
    <tr>
              <th>ISBN</th>
              <th>Titulli</th>
              <th>Autori</th>
              <th>Viti i botimit</th>
              <th>Shtepia botuese</th>
              <th>Sasia</th>
              <th>Pershkrimi</th>
              <th>url</th>
              <th>Zhanri</th>
              <th>Rafti</th>
            </tr>
            </thead>
        <tbody>
        {libri.map((data,i)=>{ // me i printu qato te dhena
       return(<tr key={i}>
                  <td>{data.Isbn}</td>
                  <td>{data.Titulli}</td>
                  <td>{data.Autori}</td>
                  <td>{data.Viti_Botimit}</td>
                  <td>{data.Shtepia_Botuese}</td>
                  <td>{data.Nr_Kopjeve}</td>
                  <td>{data.Pershkrimi}</td>
                  <td>{data.Url}</td>
                  <td>{data.Zhanri}</td>
                  <td>{data.Rafti_ID}</td>
                  
                  <td>
  <div className="d-inline-flex">
    <button className="btn btn-primary text-white">
      <Link to={`/libri/${data.Isbn}`} className="text-white text-decoration-none">
        Edit
      </Link>
    </button>

    <button className="btn btn-danger" onClick={(e) => handleDeleteL(data.Isbn)}>
      Delete
    </button>
  </div>
</td>
                </tr>)
             })   
      }
  </tbody>
   
  </table>
  </>
  
}

export default Ldashboard;