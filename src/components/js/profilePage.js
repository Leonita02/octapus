import '../css/profilePage.css';
import fotoProfili from '../ImagesOfProject/prodilePiic.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WishCard from './WishCard';
import addWishList from '../ImagesOfProject/addWishList.png';
import logout from '../ImagesOfProject/logout img.png';
import Nav from './nav';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import {useCookies} from 'react-cookie';
import PasswordChangeForm from './PasswordChangeForm';
import { Link } from "react-router-dom";





function ProfilePage(){
    const navigate = useNavigate();
    const [cookies] = useCookies(['userId', 'roleId']);

    // Access the user ID and role ID from cookies
    const userId = cookies.userId;
    const roleId = cookies.roleId;
    const [userData, setUserData] = useState(null);
    const [historiaL, setHistoriaL] = useState(null); // funksioni per me te dergu me add-> wishLista 
    function navigateToWishList() {
        navigate('/wishList');
    }
    function navigateToPagesa(){
        navigate('/pagesa');
    }
    const [showBookHistory, setShowBookHistory] = useState(false);
    const handleBookHistoryClick = (item) => {
      if (item === 'Change Password') {
        navigate('/changePassword');
      } else {
        setShowBookHistory(!showBookHistory);
      }
    };

    // const handleBookHistoryClick = () => {
    //   setShowBookHistory(!showBookHistory);
   
    // };
    useEffect(() => {
      // Make the GET request to fetch wishlist data based on userId
      axios.get(`http://localhost:8081/historiaLibrave?userId=${userId}`)
        .then(res => {
          setHistoriaL(res.data);
        })
        .catch(err => console.log(err));
    }, [userId]);
    

   
    useEffect(() => {
      axios
        .get(`http://localhost:8081/userInfo/${userId}`)
        .then(response => {
          const responseData = response.data; // Response data is an array of objects
          setUserData(responseData[0]); // Access the first object in the array
        })
        .catch(error => {
          console.log(error);
        });
    }, [userId]);






    

    const handleLogout = () => {
      axios
        .get('http://localhost:8081/logout')
        .then((res) => {
          if (res.data.message === "Logout successful.") {
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
                <h5 className="card-title"><b>Nr. Rendorë: {userData.Personi_ID}</b></h5>
                  <h5 className="card-title"><b>{userData.Emri} {userData.Mbiemri}</b></h5>
                  <p className="card-text">Email: {userData.Email}</p>
                  <p className="card-text">Nr. Telefoni: {userData.Nr_Tel}</p>
                </div>
              </div>
              {/* Account Settings */}
              <div className="card bg-light rounded-3 mb-4 account-settings" style={{ cursor: 'pointer' }}>
                <div className="card-header bg-dark text-white">Account Settings</div>
                <ul className="list-group list-group-flush">
                <Link to="/PasswordChangeForm" className="list-group-item">
                  <i className="bi bi-key me-2"></i>
                       Change Password
                </Link>
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
      <div className="card bg-light rounded-3 mb-4 test">
        <div className="card-header bg-custom text-white">Historia e librave të huazuar</div>
        <div className="card-body">
          <button className="btn btn-costum mb-3" onClick={handleBookHistoryClick}>
            {showBookHistory ? 'Mbyll historinë' : 'Shfaq historinë e librave'}
          </button>
          {showBookHistory && (
            <div className="row">
              {historiaL.map(data => (
               <div className="col-md-6" key={data.id}>
               {/* Book Wish Cards */}
               <div className="card bg-white mb-3">
                 <div className="card-body">
                   <div className="row">
                     <div className="col-md-6">
                       <h6 className="card-title">{data.Titulli}</h6>
                       <p className="card-text">Author: {data.Autori}</p>
                       <p className="card-text">Category: {data.Zhanri}</p>
                       {/* Add more book wish card details */}
                     </div>
                     <div className="col-md-6">
                     <img src={require(`../ImagesOfProject/${data.Url}`)} alt="Book Cover" style={{ maxWidth: '50%', height: 'auto' }} />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
              ))}
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