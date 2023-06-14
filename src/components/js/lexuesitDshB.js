import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useCookies} from 'react-cookie';


function LexuesiDashB() {
  const [lexuesi, setLexuesi] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/clientRepo')
      .then((res) => {
        const formattedLexuesi = res.data.map((request) => ({
          ...request,
          Datelindja: new Date(request.Datelindja).toLocaleDateString(),

        }));
        setLexuesi(formattedLexuesi);
      })
      .catch(err => console.log(err));

  }
  )
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

  return <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h1 className="text-center"> <b>Lexuesit</b>  <i class="fas fa-users"></i> </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Link to='/ClientSignUp' className="btn btn-success"><b>Regjistro lexuesi të ri +</b></Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Datelindja</th>
              <th>Qyteti</th>
              <th>Numri telefonit</th>

            </tr>
          </thead>

          <tbody>
            {lexuesi.map((data, i) => { // me i printu qato te dhena
              return (<tr key={i}>
                <td>{data.Emri}</td>
                <td>{data.Mbiemri}</td>
                <td>{data.Email}</td>
                <td>{data.Datelindja}</td>
                <td>{data.Qyteti}</td>
                <td>{data.Nr_Tel}</td>

                <td>

                  {/* <button className='btn btn-primary' ><Link to ={ `/menaxheri/${data.Personi_ID}`} >Përmirëso</Link></button>  */}
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
}

export default LexuesiDashB;