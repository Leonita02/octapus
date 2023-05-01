import "bootstrap/dist/css/bootstrap.min.css";
import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function dashboard(){
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
        <Link to='/SignupForm'>Add new </Link>
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
          <tbody>
            {
              personi.map((data,i)=>{ // me i printu qato te dhena
                <tr key={i}>
                  <td>{data.ID}</td>
                  <td>{data.Emri}</td>
                  <td>{data.Mbiemri}</td>
                  <td>{data.Email}</td>
                  <td>{data.Datelindja}</td>
                  <td>{data.Qyteti}</td>
                  <td>{data.Paga}</td>
                  <td>{data.NrTelefonit}</td>
                  <td>{data.Qendra}</td>
                  <td>
                    <button className='btn' >Update</button> 
                     {/* <Link to={'update/${data.id}}'}></Link> */}
                    <button className = 'btn'>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
}

export default dashboard;