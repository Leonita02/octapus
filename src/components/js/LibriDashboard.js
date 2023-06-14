import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Ldashboard() {
  const [libri, setLibri] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8081/libri')
      .then((res) => setLibri(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteL = async (Isbn) => {
    try {
      await axios.delete('http://localhost:8081/libri/' + Isbn);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [cookies] = useCookies(['userId', 'roleId']);
  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  if (!isAuthorized(['1','2', '3'])) {
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

      <div className="col-md-12 mt-5">
        <button className="btn btn-primary text-white">
          <Link to={`/addBook`} className="text-white text-decoration-none">
            Shto Liber
          </Link>
        </button>
        <h1 className="text-center">
          <i class="fas fa-book"></i> <b>Invertari i Librave </b>
        </h1>
      </div>
      <table className="table caption-top bg-white rounded mt-2">
        <caption className="text-white fs-4"> Recent Orders</caption>
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
          {libri.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.Isbn}</td>
                <td>{data.Titulli}</td>
                <td>{data.Autori}</td>
                <td>{data.Viti_Botimit}</td>
                <td>{data.Shtepia_Botuese}</td>
                <td>{data.Nr_Kopjeve}</td>
                <td>{data.Pershkrimi}</td>
                <td>{data.Url}</td>
                <td>{data.Zhanri}</td>
                <td>{data.Rafti_ID}</td>

                <td>
                  <div className="d-inline-flex">
                    <button className="btn btn-primary text-white">
                      <Link to={`/libri/${data.Isbn}`} className="text-white text-decoration-none">
                        Edit
                      </Link>
                    </button>

                    <button className="btn btn-danger" onClick={(e) => handleDeleteL(data.Isbn)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Ldashboard;