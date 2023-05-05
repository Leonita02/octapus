import "bootstrap/dist/css/bootstrap.min.css";
import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";


function Dashboard(){
  const [personi,setPersoni] = useState([]) // me i marr te dhenat prej tabeles personi nga url i node file-it
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setPersoni(res.data))
    .catch(err => console.log(err));

  }
  )
    return <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h1 className="text-center">Tabela e punetoreve</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Link to='/SignupForm' className="btn btn-success">Add new </Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Datelindja</th>
              <th>Qyteti</th>
              <th>Paga</th>
              <th>Nr_Tel</th>
              <th>Qendra</th>
            </tr>
          </thead>

          <Row></Row>
          
        </table>
      </div>
    </div>
  </div>
}

export default Dashboard;