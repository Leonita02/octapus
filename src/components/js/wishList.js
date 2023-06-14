import React from 'react';
import Nav from './nav';
import Footer from '../js/footer';
import image from '../ImagesOfProject/foto1.avif';
 import  '../css/wishList.css';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';

import {useCookies} from 'react-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function WishL() {
    const [titulli, setTitulli] = useState("")
    const [autori, setAutori] = useState("")
    const [cookies] = useCookies(['userId', 'roleId']);

    // Access the user ID and role ID from cookies
    const userId = cookies.userId;
    const roleId = cookies.roleId;
    
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("userId from cookie:", userId);
        axios.post("http://localhost:8081/wishList", { titulli, autori, userId })
          .then(res => {
            console.log(res);
            navigate('/profilePage');
          })
          .catch(err => console.error(err));
      }

      const isAuthorized = (allowedRoles) => {
        const userRole = cookies.roleId;
        return allowedRoles.includes(userRole);
      };
    
      if (!isAuthorized(['4'])) {
        return (
          <div>
            <h1>Unauthorized Access</h1>
            {/* Additional unauthorized access handling */}
          </div>
        );
      }

    
    return (
        <>
            <div><Nav /></div>
            <br />
            <br />
            <br></br>
            <br></br>
            <br></br>
            <div className="container custom-container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card border-0 shadow" style={{ minHeight: "450px" }}>
        <div className="card-header bg-custom text-white text-center" style={{ backgroundColor: " RGB(130, 179, 229)"}}>
          <h1>Wish-Card</h1>
        </div>
        <br></br>
       
        <div className="card-body">
            
          <form onSubmit={handleSubmit} id="form">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="titulli" style={{ fontWeight: "bold", fontSize: "18px" }}>Titulli:</label>
                  <br></br>
            
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="titulli"
                    placeholder="Shkruani titullin"
                    style={{ marginLeft: "1px" ,border: "3px solid #ccc" }}
                    // style={{ width: "250px" }}
                    onChange={(e) => setTitulli(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br></br>
            
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="autori" style={{ fontWeight: "bold", fontSize: "18px" }}>Autori:</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="autori"
                    style={{border: "3px solid #ccc" }}
                    placeholder="Shkruani autorin"
                    onChange={(e) => setAutori(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br>
            </br>
          
            <div className="row">
              <div className="col">
              <button
            type="submit"
  className="btn btn-custom btn-block ml-auto"
  style={{ backgroundColor: "RGB(130, 179, 229)", color: "white", width: "120%" }}
>
  Shto në Wish-List
</button>
              </div>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
            <br />
            <br />
            <br />
            {/* <div><Footer /></div> */}
        </>
    );
}


// export default WishL;
