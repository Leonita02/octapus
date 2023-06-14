import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle ,FaSun} from 'react-icons/fa';
import {useCookies} from 'react-cookie';

function MenaxhimiP() {
  const [kerkesa, setKerkesa] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [approvedRowIds, setApprovedRowIds] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/menaxhimiP')
      .then((res) => {
        const formattedKerkesa = res.data.map((request) => ({
          ...request,
          Data_Fillimit: new Date(request.Data_Fillimit).toLocaleDateString(),
          Data_Mbarimit: new Date(request.Data_Mbarimit).toLocaleDateString(),
        }));
        setKerkesa(formattedKerkesa);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (id) => {
    const updatedKerkesa = kerkesa.map((data) => {
      if (data.MP_ID === id) {
        return { ...data, Status: 'Aprovuar' };
      }
      return data;
    });
    setKerkesa(updatedKerkesa);
    setApprovedRowIds([...approvedRowIds, id]);
  
    // Make a PUT request to update the status in the backend
    axios.put(`http://localhost:8081/menaxhimiP/${id}`, { status: 'Aprovuar' })
      .then((res) => {
        // Handle the response if needed
        console.log(res.data.message);
      })
      .catch((err) => {
        // Handle the error if needed
        console.log(err);
      });
  };

  const handleReject = (id) => {
    console.log(id);
    const updatedKerkesa = kerkesa.map((data) => {
      if (data.MP_ID === id) {
        sendEmailNotification(data.Emri, data.Mbiemri, 'refuzuar');
        return { ...data, Status: 'Refuzuar' };
      }
      return data;
    });
    setKerkesa(updatedKerkesa);
    setSelectedRowId(id);
  
    // Make a PUT request to update the status in the backend
    axios.put(`http://localhost:8081/menaxhimiR/${id}`, { status: 'Refuzuar' })
      .then((res) => {
        // Handle the response if needed
        console.log(res.data.message);
      })
      .catch((err) => {
        // Handle the error if needed
        console.log(err);
      });
  };

  const sendEmailNotification = (firstName, lastName, status) => {
    // Implement the logic to send an email notification to the user
    // console.log(`Email sent to ${firstName} ${lastName}. Status: ${status}`);
  };
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
            <h1 className="text-center"><b>Kërkesat për pushime</b>  <FaSun /></h1>
            <br />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Emri</th>
                  <th>Mbiemri</th>
                  <th>Data e Fillimit</th>
                  <th>Data e Mbarimit</th>
                  <th>Arsyeja</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {kerkesa.map((data, i) => {
                  const rowClassName = approvedRowIds.includes(data.MP_ID)
                    ? 'table-success'
                    : data.MP_ID === selectedRowId && data.Status === 'Refuzuar'
                    ? 'table-danger'
                    : '';

                  return (
                    <tr key={i} className={rowClassName}>
                      <td>{data.Emri}</td>
                      <td>{data.Mbiemri}</td>
                      <td>{data.Data_Fillimit}</td>
                      <td>{data.Data_Mbarimit}</td>
                      <td>{data.Arsyeja}</td>
                      <td><b>{data.Status}</b></td>
                      <td>
                        {data.Status === 'Pending' && (
                          <div>
                            <button
                              className="btn btn-success"
                              onClick={() => handleApprove(data.MP_ID)}
                            >
                              <FaCheckCircle />
                              <span className="ml-1">Aprovo</span>
                            </button>
                            <button
                              className="btn btn-danger ml-2"
                              onClick={() => handleReject(data.MP_ID)}
                            >
                              <FaTimesCircle />
                              <span className="ml-1">Refuzo</span>
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

export default MenaxhimiP;