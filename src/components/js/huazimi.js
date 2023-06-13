// import '../css/addBook.css';
// import Nav from './nav';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {useCookies} from 'react-cookie';

function Huazimi(){

  const [isbn,setIsbn]=useState("")
    const [personi,setPersoni]=useState("")
    const [dataHuazimit,setDataHuazimit]=useState("")
    const [dataKthimit,setDataKthimit]=useState(0)
 const navigate=useNavigate();

    function handleSubmit(event){
      event.preventDefault();
      axios.post("http://localhost:8081/huazimi",{isbn,personi,dataHuazimit,dataKthimit})
      .then(res =>{
          console.log(res);
          navigate('/sidebar')
          
      }).catch(err => console.log(err));

    }
    const [cookies] = useCookies(['userId', 'roleId']);
    const isAuthorized = (allowedRoles) => {
      const userRole = cookies.roleId;
      return allowedRoles.includes(userRole);
    };
  
    if (!isAuthorized(['1','2','3'])) {
      return (
        <div>
          <h1>Unauthorized Access</h1>
          {/* Additional unauthorized access handling */}
        </div>
      );
    }
 return(
    <>
    <br></br>
        <br></br>
        <br></br>
        <div className="container py-5" >
  <div className="row justify-content-center" >
    <div className="col-lg-6" style={{backgroundColor:"#f8f9fa" , border:"1px solid gray"}}>
      <div className="huazimi-librit" >
        <br></br>
        <h1 className="text-center"><b>Huazimi i librit</b>

        </h1>
        <hr className="my-4" />
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
            <label htmlFor="isbn">
              ISBN e librit:
            </label>
            <input
              type="number"
              className="form-control"
              id="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="personi">
             ID e Lexuesit:
            </label>
            <input
              type="number"
              className="form-control"
              id="personi"
              value={personi}
              onChange={(e) => setPersoni(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="dataHuazimit">
             Data e Huazimit
            </label>
            <input
              type="date"
              className="form-control"
              id="dataHuazimit"
              value={dataHuazimit}
              onChange={(e) => setDataHuazimit(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="dataKthimit">
             Data e Kthimit
            </label>
            <input
              type="date"
              className="form-control"
              id="dataKthimit"
              value={dataKthimit}
              onChange={(e) => setDataKthimit(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
         
            <button type="submit" className="btn btn-success">
              Regjistro huazimin
            </button>
            <br></br>   
            <br></br>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>






    </>





 )
 }


export default Huazimi;