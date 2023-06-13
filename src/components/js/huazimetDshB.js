import "bootstrap/dist/css/bootstrap.min.css";
// import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import {useCookies} from 'react-cookie';


function Huazimet() {
    const [huazimet, setHuazimet] = useState([]);
    
  
  
    useEffect(() => {
      axios.get('http://localhost:8081/huazimi')
        .then((res) => {
          const formattedHuazimi = res.data.map((request) => ({
            ...request,
            Data_Marrjes: new Date(request.Data_Marrjes).toLocaleDateString(),
            Data_Kthimit: new Date(request.Data_Kthimit).toLocaleDateString()
          }));
          setHuazimet(formattedHuazimi);
        })
        .catch(err => console.log(err));
    }, []);
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
  
    function handleStatusChange(index, newStatus) {
        const updatedHuazimet = [...huazimet];
        const hId = updatedHuazimet[index].ID;
      
        if (newStatus === 'E kthyer') {
          updatedHuazimet[index].Statusi = newStatus;
      
          axios.put(`http://localhost:8081/huazimi/${hId}`, { status: newStatus })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
              updatedHuazimet[index].Statusi = huazimet[index].Statusi;
            });
        } else if (newStatus === 'Rinovuar') {
          const currentDate = new Date(updatedHuazimet[index].Data_Kthimit);
          const newReturnDate = new Date(currentDate.setDate(currentDate.getDate() + 7)); // Add 7 days to the existing date
      
          updatedHuazimet[index].Statusi = newStatus;
          updatedHuazimet[index].Data_Kthimit = newReturnDate.toLocaleDateString(); // Format as a string
      
          axios.put(`http://localhost:8081/renew/${hId}`, {
            status: newStatus,
            returnDate: newReturnDate.toISOString().slice(0, 10) // Format the return date as yyyy-mm-dd
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
              updatedHuazimet[index].Statusi = huazimet[index].Statusi;
              updatedHuazimet[index].Data_Kthimit = huazimet[index].Data_Kthimit;
            });
        }
      
        setHuazimet(updatedHuazimet);
      }
  
    return (
        <>
        <br/>
        <br/>
        <Link to="/huazimi" className="btn btn-success">Shto</Link>
        <div className="col-md-12 mt-5">
          <h1 className="text-center">
            <i className="fas fa-book"></i> <b>Huazimet e librave</b> <i className="fas fa-user"></i>
            <br/>
            <br/>
          </h1>
        </div>
        <table className="table caption-top bg-white rounded mt-2" style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
          <thead className="table-white">
            <tr>
              <th>Numri rendorë</th>
              <th>Lexuesi</th>
              <th>ISBN</th>
              <th>Titulli</th>
              <th>Autori</th>
              <th>Data Huazimit</th>
              <th>Data Kthimit</th>
              <th>Statusi</th>
              <th>Veprimet</th>
            </tr>
          </thead>
          <tbody>
            {huazimet.map((data, i) => {
              const isReturned = data.Statusi === 'E kthyer';
              return (
                <tr key={i}>
                  <td>{data.Personi_ID}</td>
                  <td>{data.Lexuesi}</td>
                  <td>{data.Isbn}</td>
                  <td>{data.Titulli}</td>
                  <td>{data.Autori}</td>
                  <td>{data.Data_Marrjes}</td>
                  <td>{data.Data_Kthimit}</td>
                  <td>{data.Statusi}</td>
                  <td>
                    {!isReturned && (
                      <div className="btn-group">
                        <button className="btn btn-success me-2" onClick={() => handleStatusChange(i, 'E kthyer')}>
                          E kthyer
                        </button>
                        <button className="btn btn-primary" onClick={() => handleStatusChange(i, 'Rinovuar')}>
                          Rinovuar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  
}

export default Huazimet;