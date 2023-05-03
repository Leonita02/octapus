import "bootstrap/dist/css/bootstrap.min.css";
import Row from './row';
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

  // const [libri, setLibri] = useState([]);

  // useEffect(() => {
  //   axios.get("/libri")
  //     .then(res => {
  //       const sql = "SELECT * FROM libri";
  //       connection.query(sql, (err, data) => {
  //         if (err) return console.error(err);
  //         setLibri(data);
  //       });
  //     })
  //     .catch(err => console.error(err));
  // }, []);
    return <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h1 className="text-center">Invertari i Librave</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Link to='/addBook' className="btn btn-success">Add new </Link>
        <table className="table table-hover">
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
                  <td>{data.Rafti}</td>
                  <td>
                    {/* <button className='btn btn-primary' ><Link to ={ `update/${data.Personi_ID}`} >Update</Link></button>  */}
                     {/* <Link to={'update/${data.id}}'}></Link> */}
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

export default Ldashboard;