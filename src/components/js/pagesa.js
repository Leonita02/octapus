import React, { useEffect, useState } from 'react';
import Nav from '../js/nav';
import { useNavigate } from 'react-router';
import { handleButtonClick } from './pagesaStripe';
import axios from 'axios';
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

import {useCookies} from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagesa() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['userId', 'roleId']);
  const userId = cookies.userId;

  function navigateToPagesa() {
    navigate('/logIn');
  }

  const [pagesat, setPagesat] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/stripe?userId=${userId}`)
      .then((res) => {
        const formattedPagesa = res.data.map((request) => ({
          ...request,
          data_pageses: new Date(request.data_pageses).toLocaleDateString(),
        }));
        setPagesat(formattedPagesa);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  
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

  if (!isAuthorized([ '4'])) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }


  return (
    <>
      <div>
        <Nav />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="container" style={{ maxWidth: "800px" }}>
  <h2 className="text-center mb-4"><b>Historia e Pagesave</b></h2>

  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Emri</th>
          <th>Mbiemri</th>
          <th>Email</th>
          <th>Qyteti</th>
          <th>Data Pageses</th>
          <th>Expiration Date</th>
        </tr>
      </thead>
      <tbody>
        {pagesat.map((pagesa) => (
          <React.Fragment key={pagesa.Pagesa_ID}>
            <tr>
              <td>{pagesa.Emri}</td>
              <td>{pagesa.Mbiemri}</td>
              <td>{pagesa.Email}</td>
              <td>{pagesa.qyteti}</td>
              <td>{pagesa.data_pageses}</td>
              <td>{calculateExpirationDate(pagesa.data_pageses).toLocaleDateString()}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>

  {pagesat.length > 0 ? null : (
    <div className="text-center">
      <h4 className="mb-4">Nuk ka ndonjë pagesë të kryer</h4>
      <RiErrorWarningLine size={48} />
    </div>
  )}

  <div className="text-center mt-4">
    <h3 className="mb-3">Paguani me formën më të shpejtë!</h3>
    <button className="btn btn-primary btn-lg" onClick={handleButtonClick}>
      Paguaj
    </button>
  </div>
</div>

    </>
  );
}

export default Pagesa;
