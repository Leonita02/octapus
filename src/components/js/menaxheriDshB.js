import "bootstrap/dist/css/bootstrap.min.css";
// import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useCookies} from 'react-cookie';


function MenaxheriDashB(){
  const [menaxheri,setMenaxheri] = useState([]) 
  useEffect(()=>{
    axios.get('http://localhost:8081/menaxheri')
    .then((res) =>{
      const formattedMenaxheri = res.data.map((request) => ({
        ...request,
        Datelindja: new Date(request.Datelindja).toLocaleDateString(),
        
      }));
      setMenaxheri(formattedMenaxheri);
    })
    .catch(err => console.log(err));

  }
  )
  const [cookies] = useCookies(['userId', 'roleId']);
  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  if (!isAuthorized(['1'])) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }

//   const handleDelete = async(Personi_ID)=>{
//     try{
//       await axios.delete('http://localhost:8081/personi/' + Personi_ID)
//       window.location.reload()
//     }catch(err){
//       console.log(err);
//     }
//   }

//   const handleDeleteL = async(Isbn)=>{
//     try{
//       await axios.delete('http://localhost:8081/libri/' + Isbn)
//       window.location.reload()
//     }catch(err){
//       console.log(err);
//     }
//   }
  
    return <>
    
    <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h1 className="text-center"><b>Menaxherët e Bibliotekës</b> <i class="fas fa-user-check"></i></h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Link to='/signup' className="btn btn-success"><b>Regjistro menaxherë të ri +</b></Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Datelindja</th>
              <th>Qyteti</th>
              <th>Paga</th>
              <th>Numri telefonit</th>
              <th>Username</th>
            </tr>
          </thead>

          <tbody>
      {menaxheri.map((data,i)=>{ // me i printu qato te dhena
       return(<tr key={i}>
                  <td>{data.Emri}</td>
                  <td>{data.Mbiemri}</td>
                  <td>{data.Email}</td>
                  <td>{data.Datelindja}</td>
                  <td>{data.Qyteti}</td>
                  <td>{data.Paga}</td>
                  <td>{data.Nr_Tel}</td>
                  <td>{data.username}</td>
                  <td>
                    
                  <button className='btn btn-primary' ><Link to ={ `/menaxheri/${data.Personi_ID}`} className="text-white" style={{textDecoration:"none"}}>Përmirëso</Link></button> 
                    {/* <button className = 'btn btn-danger' onClick={e => handleDelete(data.Personi_ID)}>Delete</button> */}
                  </td>
                </tr>)
             })   
      }
  </tbody>
          
        </table>
      </div>
    </div>
  </div>
  </>
}

export default MenaxheriDashB;