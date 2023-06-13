import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle ,FaSun, FaBook} from 'react-icons/fa';
import {useCookies} from 'react-cookie';

function Rezervimet() {
  const [rezervimet, setRezervimet] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [approvedRowIds, setApprovedRowIds] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/rezervimet')
      .then((res) => {
        setRezervimet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (id) => {
    const updatedRezervimet = rezervimet.map((data) => {
      if (data.Id === id) {
        return { ...data, Status: 'E huazuar' };
      }
      return data;
    });
    setRezervimet(updatedRezervimet);
    setApprovedRowIds([...approvedRowIds, id]);
  
    // Make a PUT request to update the status in the backend
    axios.put(`http://localhost:8081/rezervimet/${id}`, { status: 'E huazuar' })
      .then((res) => {
        // Handle the response if needed
        console.log(res.data.message);
      })
      .catch((err) => {
        // Handle the error if needed
        console.log(err);
      });
  };

 
  const [cookies] = useCookies(['userId', 'roleId']);
  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  if (!isAuthorized(['2','3'])) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }

  return (
    <>
      <br />
      <br />
      <div className="container mx-9">
        <div className="row">
          <div
            className="col-md-12 mt-4"
            style={{ backgroundColor: "#f8f9fa"}}
          >
            <br />
            <h1 className="text-center"><b>Rezervimet e lexuesve</b>  <FaBook /></h1>
            <br />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Lexuesi</th>
                 
                  <th>Titulli</th>
                  <th>Autori</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rezervimet.map((data, i) => {
                //   const rowClassName = approvedRowIds.includes(data.Id)
                //     ? 'table-success'
                //     : data.MP_ID === selectedRowId && data.Status === 'Refuzuar'
                //     ? 'table-danger'
                //     : '';

                  return (
                    <tr key={i} >
                      <td>{data.Lexuesi}</td>
                    
                      <td>{data.Titulli}</td>
                      <td>{data.Autori}</td>
                      <td><b>{data.Status}</b></td>
                      <td>
                        {data.Status === 'Rezervuar' && (
                          <div>
                            <button
                              className="btn btn-success"
                              onClick={() => handleApprove(data.Id)}
                            >
                              <FaCheckCircle />
                              <span className="ml-1">E huazuar</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rezervimet;