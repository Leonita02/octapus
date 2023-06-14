import React, { useEffect, useState } from 'react';
import Nav from '../js/nav';
import { useNavigate } from 'react-router';
import { handleButtonClick } from './pagesaStripe';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagesa() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['userId', 'roleId']);
const userId=cookies.userId;

  function navigateToPagesa() {
    navigate('/logIn');
  }

  const [pagesat, setPagesat] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/pagesat`)
      .then((res) => {
        const formattedPagesa = res.data.map((request) => ({
          ...request,
          data_pageses: new Date(request.data_pageses).toLocaleDateString(),
        }));
        setPagesat(formattedPagesa);
      })
      .catch((err) => console.log(err));
  }, []);

  function calculateExpirationDate(paymentDate) {
    const dateObject = new Date(paymentDate);
    const expirationDate = new Date(dateObject);
    expirationDate.setFullYear(dateObject.getFullYear() + 1);
    return expirationDate;
  }
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

  return (
    <>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-3">
      <h2 className="text-center mb-4"> <b>Historia e Pagesave</b></h2>

      <table className="table table-border">
        <thead className="thead-dark">
        <tr className="table-primary">
            <th>Emri</th>
            <th>Mbiemri</th>
            <th>Email</th>
            <th>Qyteti</th>
            {/* <th>Emri i Karteles</th>
            <th>Numri i Karteles</th> */}
            <th>Data Pageses</th>
            <th>Expiration Date</th> {/* New column */}
          </tr>
        </thead>
        <tbody>
          {pagesat.map((pagesa, index) => (
            <tr key={pagesa.Pagesa_ID} >
              <td>{pagesa.Emri}</td>
              <td>{pagesa.Mbiemri}</td>
              <td>{pagesa.Email}</td>
              <td>{pagesa.qyteti}</td>
              {/* <td>{pagesa.emriKarteles}</td>
              <td>{pagesa.nrKarteles}</td> */}
              <td>{pagesa.data_pageses}</td>
              <td>{calculateExpirationDate(pagesa.data_pageses).toLocaleDateString()}</td> {/* Show expiration date */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </>
  );
}

export default Pagesa;
