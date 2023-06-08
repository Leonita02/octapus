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
      <div className="container">
        <h2>Historia e Pagesave</h2>

        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Qyteti</th>
              <th>Emri i Karteles</th>
              <th>Numri i Karteles</th>
              <th>Data Pageses</th>
              <th>Expiration Date</th> {/* New column */}
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
                  <td>{pagesa.emriKarteles}</td>
                  <td>{pagesa.nrKarteles}</td>
                  <td>{pagesa.data_pageses}</td>
                  <td>{calculateExpirationDate(pagesa.data_pageses).toLocaleDateString()}</td> {/* Display expiration date */}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <h3>Paguani me formën më të shpejtë!</h3>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Paguaj
        </button>
      </div>
    </>
  );
}

export default Pagesa;
