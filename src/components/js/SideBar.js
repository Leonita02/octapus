import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaBook, FaUsers, FaPowerOff, FaMoneyBill } from 'react-icons/fa';
import {  FaUserCheck, FaSun, FaCreditCard } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/sideBar.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useState } from "react";
import MenaxheriDashB from './menaxheriDshB';
import Ldashboard from './LibriDashboard';
import PunetoretDashB from './punetoretDshB';
import Feed from './feed';
import Dashboard from './dashboard';
import MainF from './MainFeed';
import PagesaForm from './pagesaForm';
import MenaxhimiP from './menaxhimiP';
import LexuesiDashB from './lexuesitDshB';
import Huazimet from './huazimetDshB';
import Popup from './Popup.js';

function SideBar(){
  const [libri,setLibri] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/libri')
    .then(res => setLibri(res.data))
    .catch(err => console.log(err));
  }, []);


  
  const [selectedComponent, setSelectedComponent] = useState("Ldashboard");

  const handleLinkClick = (component) => {
    setSelectedComponent(component);
  };



  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "PunetoretDashB":
        return <PunetoretDashB />;
      case "MenaxheriDashB":
        return <MenaxheriDashB />;
      case "MainF":
        return <MainF />;
      case "Pagesa":
        return<PagesaForm/>
      case "menaxhimiP":
        return<MenaxhimiP/>
      case "lexuesitDshB":
        return<LexuesiDashB/>
      case "huazimetDshB":
          return<Huazimet/>
      case "Popup":
            return<Popup/>
      default:
        return <Ldashboard/>;
    }
  };

  const handleDeleteL = async (Isbn) => {
    try {
      await axios.delete('http://localhost:8081/libri/' + Isbn);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlePaymentSuccess = () => {
    setSelectedComponent("SideBar"); // Set the desired component to be displayed
  };

  return (
    <>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 sidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <FaHome/>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${selectedComponent === "MainF" ? "active" : ""}`}
                  to="#"
                  onClick={() => handleLinkClick("MainF")}
                >
                  <FaBook /> Feed
                </Link>
              </li>
              <li className={`nav-item dropdown`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="servicesDropdown"
                  role="button"
                  onClick={() => handleLinkClick("Ldashboard")}
                  aria-haspopup="true"
                  aria-expanded={selectedComponent === "Ldashboard"}
                >
                  <FaCogs />Tabelat
                </Link>
                <div
                  className={`dropdown-menu ${
                    selectedComponent === "Ldashboard" ? "show" : ""
                    }`}
                  aria-labelledby="servicesDropdown"
                >
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={() => handleLinkClick("Ldashboard")}
                  >
                    <FaBook /> Librat
                  </Link>
                  <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("lexuesitDshB")}
                >
                 <FaUsers/> Lexuesit
                </Link>
                <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("PunetoretDashB")}
                >
                 <FaUserCheck /> Puntoret
                </Link>
                
                <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("MenaxheriDashB")}
                >
                 <FaUserCheck /> Menaxheret
                </Link>
                <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("menaxhimiP")}
                >
                 <FaSun /> Kërkesat e pushimeve
                </Link>
                <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("Pagesa")}
                >
                 <FaCreditCard /> Pagesat
                </Link>
                <Link
                  className="dropdown-item"
                  onClick={() => handleLinkClick("huazimetDshB")}
                >
                 <i class="bi bi-book"></i>Lista e huazimeve
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          
          </ul>
        </div>
        <div className="col-sm-9 content">
          <div className="container mx-auto">{renderSelectedComponent()}</div>
        </div>
      </div>
    </div>
  
   
  </>
  );
}

export default SideBar;
