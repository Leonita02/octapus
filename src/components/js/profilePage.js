import '../css/profilePage.css';
//import foto from '../ImagesOfProject/fotoM.jpeg';
import fotoProfili from '../ImagesOfProject/prodilePiic.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import fotoFavs from '../ImagesOfProject/fotoFav.png';
import WishCard from './WishCard';
import addWishList from '../ImagesOfProject/addWishList.png';
import logout from '../ImagesOfProject/logout img.png';
import Nav from './nav';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import {useCookies} from 'react-cookie';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faListAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';




function ProfilePage(){
    const navigate = useNavigate(); // funksioni per me te dergu me add-> wishLista 
    function navigateToWishList() {
        navigate('/wishList');
    }
    function navigateToPagesa(){
        navigate('/pagesa');
    }
    const [showBookHistory, setShowBookHistory] = useState(false);

    const handleBookHistoryClick = () => {
      setShowBookHistory(!showBookHistory);
    };
    const [cookies] = useCookies(['userId', 'roleId']);

    // Access the user ID and role ID from cookies
    const userId = cookies.userId;
    const roleId = cookies.roleId;
    const [userData, setUserData] = useState(null);

   
    useEffect(() => {
      axios
        .get(`http://localhost:8081/userInfo/${userId}`)
        .then(response => {
          const responseData = response.data; // Response data is an array of objects
          setUserData(responseData[0]); // Access the first object in the array
          console.log("Updated userData:", responseData[0]);
        })
        .catch(error => {
          console.log(error);
        });
    }, [userId]);

    const handleLogout = () => {
      axios
       .get('http://localhost:8081/logout')
        .then((res) => {
          if (res.status === 200) {
            navigate('/');
          } else {
            alert('Error');
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Error');
        });
    }; 
    return (
      <div>
      <Nav />
      <br />
      <br />
      {userData && typeof userData !== 'undefined' ? (
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 user-information">
              {/* User Information */}
              <div className="card bg-light rounded-3 mb-4">
                <img
                  src={fotoProfili}
                  alt="Profile Picture"
                  className="card-img-top rounded-circle"
                  id="fotoProfili"
                />
                <div className="card-body">
                  <h5 className="card-title"><b>{userData.Emri} {userData.Mbiemri}</b></h5>
                  <p className="card-text">Email: {userData.Email}</p>
                  <p className="card-text">Nr. Telefoni: {userData.Nr_Tel}</p>
                </div>
              </div>
              {/* Account Settings */}
              <div className="card bg-light rounded-3 mb-4 account-settings" style={{ cursor: 'pointer' }}>
                <div className="card-header bg-dark text-white">Account Settings</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-key me-2"></i>
                    Change Password
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Update Contact Information
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-lock-fill me-2"></i>
                    Privacy Settings
                  </li>
                </ul>
                <div className="card-footer bg-light" onClick={navigateToPagesa}>
                  <div className="list-group-item">
                  <i className="bi bi-credit-card-fill me-2"></i>
                    Pagesat
                  </div>
                </div>
                <div className="card-footer bg-light" onClick={handleLogout}>
                  <div className="list-group-item">
                    <i className="bi bi-box-arrow-left me-2"></i>
                    Logout
                  </div>
                </div>
              </div>
              <div className="card bg-light rounded-3 mb-4 account-settings" style={{ cursor: 'pointer' }} onClick={navigateToWishList}>
                <div className="card-header bg-dark text-white">Shto Wish Card</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-plus-circle me-2"></i>
                    Shto Wish Card
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              {/* Book History */}
              <div className="card bg-light rounded-3 mb-4">
                <div className="card-header bg-custom text-white">Historia e librave të huazuar</div>
                <div className="card-body">
                  <button
                    className="btn btn-costum mb-3"
                    onClick={handleBookHistoryClick}
                  >
                    {showBookHistory ? 'Mbyll historinë' : 'Shfaq historinë e librave'}
                  </button>
                  {showBookHistory && (
                    <div className="row">
                      <div className="col-md-6">
                        {/* Book Wish Cards */}
                        <div className="card bg-white mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Book Title 1</h6>
                            <p className="card-text">Author: Author Name</p>
                            <p className="card-text">Category: Fiction</p>
                            {/* Add more book wish card details */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        {/* Book history Cards */}
                        <div className="card bg-white mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Book Title 2</h6>
                            <p className="card-text">Author: Author Name</p>
                            <p className="card-text">Category: Non-Fiction</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="cards">
              <h3>Wish-Cards</h3>
              <WishCard />
            
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    );
              }




export default ProfilePage;

 // useEffect(() => {
    //     axios
    //       .get(`http://localhost:8081/userInfo/${userId}`)
    //       .then(response => {
    //         setUserData(response.data);
    //         console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
      
    // }, [userId]);