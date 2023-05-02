import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { useContext } from "react";

 function Row(){
  const [personi,setPersoni] = useState([]) // me i marr te dhenat prej tabeles personi nga url i node file-it
  useEffect(()=>{
    axios.get('http://localhost:8081')
    .then(res => setPersoni(res.data))
    .catch(err => console.log(err));

  })
    return  <tbody>
      {personi.map((data,i)=>{ // me i printu qato te dhena
       return(<tr key={i}>
                  <td>{data.Personi_ID}</td>
                  <td>{data.Emri}</td>
                  <td>{data.Mbiemri}</td>
                  <td>{data.Email}</td>
                  <td>{data.Datelindja}</td>
                  <td>{data.Qyteti}</td>
                  <td>{data.Paga}</td>
                  <td>{data.Nr_Tel}</td>
                  <td>{data.Biblioteka_ID}</td>
                  <td>
                    <button className='btn btn-primary' >Update</button> 
                     {/* <Link to={'update/${data.id}}'}></Link> */}
                    <button className = 'btn btn-danger'>Delete</button>
                  </td>
                </tr>)
             })   
      }
  </tbody>
 }

 export default Row;