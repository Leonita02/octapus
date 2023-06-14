import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaBook, FaUsers, FaPowerOff, FaMoneyBill, FaUser ,FaHeart} from 'react-icons/fa';
import { FaUserCheck, FaSun, FaCreditCard } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/sideBar.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LibriDashboard from './LibriDashboard';
import PunetoretDashB from './punetoretDshB';
import MenaxheriDashB from './menaxheriDshB';
import MainF from './MainFeed';
import PagesaForm from './pagesaForm';
import LexuesiDashB from './lexuesitDshB';
import PorosiaDashboard from './porosiaDashboard';
import MenaxhimiP from './menaxhimiP';
import Huazimet from './huazimetDshB';
import Popup from './Popup.js';
import Pdashboard from './porosiaDashboard';
import Pagesa from './pagesa';
import Porosia from './porosia';
import { useCookies } from 'react-cookie';
import { IsAuthorized } from './authorization'; // Import the isAuthorized function
import SignupForm from './SignupForm';
import VForm from './VForm';
import WLdashboard from './WLdashboard';
import DashboardM from './dashboardM';
import Rezervimet from './rezervimetDshb';
import PopupP from './popUpP';
import HistoriaPagesav from './historia_pagesave';
const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const cookies = useCookies();
  const navigate = useNavigate();

  const [selectedComponent, setSelectedComponent] = useState("dashboardM");

  const handleLinkClick = (component) => {
    setSelectedComponent(component);
    setIsDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  const renderSelectedComponent = () => {
    const userRole = cookies.roleId; // Assuming you have the user's role stored in the 'roleId' cookie

    switch (selectedComponent) {
      case "PunetoretDashB":
        return IsAuthorized(['1','2'], userRole) ? <PunetoretDashB /> : <p>Unauthorized Access :/</p>;
      case "MenaxheriDashB":
        return IsAuthorized(['1'], userRole) ? <MenaxheriDashB /> : <p>Unauthorized Access :/</p>;
      case "MainF":
        return <MainF />;
      case "PagesaForm":
        return IsAuthorized(['2','3'], userRole) ? <PagesaForm /> : <p>Unauthorized Access :/</p>;
        case "historia_pagesave":
          return IsAuthorized(['1'], userRole) ? <HistoriaPagesav /> : <p>Unauthorized Access :/</p>;
        case "LexuesitDshB":
          return IsAuthorized(['1','2','3'], userRole) ? <LexuesiDashB /> : <p>Unauthorized Access :/</p>;
          case "menaxhimiP":
          return IsAuthorized(['1'], userRole) ? <MenaxhimiP /> : <p>Unauthorized Access :/</p>;
        case "huazimetDshB":
            return IsAuthorized(['1','2','3'], userRole) ? <Huazimet/> : <p>Unauthorized Access :/</p>;
        case "PorosiaDashboard":
              return IsAuthorized(['1'], userRole) ? <PorosiaDashboard/> : <p>Unauthorized Access :/</p>;
        case "porosia":
              return IsAuthorized(['2'], userRole) ? <Porosia/> : <p>Unauthorized Access :/</p>;
        case "SignupForm":
           return IsAuthorized(['1'], userRole) ? <SignupForm/> : <p>Unauthorized Access :/</p>;
        case "WLdashboard":
            return IsAuthorized(['2'], userRole) ? <WLdashboard/> : <p>Unauthorized Access :/</p>;
         case "VForm":
            return IsAuthorized(['2','3'], userRole) ? <VForm/> : <p>Unauthorized Access :/</p>;
        case "rezervimetDshb":
              return IsAuthorized(['2','3'], userRole) ? <Rezervimet/> : <p>Unauthorized Access :/</p>;
        case "LibriDashboard":
            return IsAuthorized(['1', '2', '3'], userRole) ? <LibriDashboard /> : <p>Unauthorized Access :/</p>;
        case "dashboardM":
        default:
          return IsAuthorized(['1', '2', '3'], userRole) ? <DashboardM/> : <p>Unauthorized Access :/</p>;
      }
    };
     
    const userRole = cookies.roleId;
 
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
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 sidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/sideBar">
                  <FaHome /> Home
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
              <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="servicesDropdown"
                  role="button"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <FaCogs /> Tabelat
                </Link>
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="servicesDropdown"
                >
                  <Link
                    className={`dropdown-item ${selectedComponent === "dashboardM" ? "active" : ""}`}
                    to="#"
                    onClick={() => handleLinkClick("dashboardM")}
                  >
                    <FaBook /> Dashboard
                  </Link>
                  <Link
                    className={`dropdown-item ${selectedComponent === "LibriDashboard" ? "active" : ""}`}
                    to="#"
                    onClick={() => handleLinkClick("LibriDashboard")}
                  >
                    <FaBook /> Librat
                  </Link>
                  <Link
                    className={`dropdown-item ${selectedComponent === "LexuesitDshB" ? "active" : ""}`}
                    onClick={() => handleLinkClick("LexuesitDshB")}
                  >
                    <FaUsers /> Lexuesit
                  </Link>
                  {IsAuthorized(['1','2'], cookies.roleId) && (
                  <Link
                    className={`dropdown-item ${selectedComponent === "PunetoretDashB" ? "active" : ""}`}
                    onClick={() => handleLinkClick("PunetoretDashB")}
                  >
                    <FaUserCheck /> Puntoret
                  </Link>
                  )}
                  {IsAuthorized(['1'], cookies.roleId) && (
                    <Link
                      className={`dropdown-item ${selectedComponent === "MenaxheriDashB" ? "active" : ""}`}
                      onClick={() => handleLinkClick("MenaxheriDashB")}
                    >
                      <FaUserCheck /> Menaxheret
                    </Link>
                  )}
                  {IsAuthorized(['1'], cookies.roleId) && (
                    <Link
                      className={`dropdown-item ${selectedComponent === "menaxhimiP" ? "active" : ""}`}
                      onClick={() => handleLinkClick("menaxhimiP")}
                    >
                      <FaSun /> Kërkesat e pushimeve
                    </Link>
                  )}
                   {IsAuthorized(['1','2','3'], cookies.roleId) && (
                    <Link
                      to="#"
                      className={`dropdown-item ${selectedComponent === "huazimetDshB" ? "active" : ""}`}
                      onClick={() => handleLinkClick("huazimetDshB")}
                    >
                      <FaUsers /> Huazimet e Lexuesve
                    </Link>
                  )}
                   {IsAuthorized(['1','2','3'], cookies.roleId) && (
                    <Link
                      to="#"
                      className={`dropdown-item ${selectedComponent === "rezervimetDshb" ? "active" : ""}`}
                      onClick={() => handleLinkClick("rezervimetDshb")}
                    >
                      <FaBook /> Rezervimet nga lexuesit
                    </Link>
                  )}
                 
                   {IsAuthorized(['1'], cookies.roleId) && (
                    <Link
                      to="#"
                      className={`dropdown-item ${selectedComponent === "PorosiaDashboard" ? "active" : ""}`}
                      onClick={() => handleLinkClick("PorosiaDashboard")}
                    >
                      <FaMoneyBill /> Porositë e librave 
                    </Link>
                  )}
                 
                </div>
              </li>
              
            <li className="nav-item">
                <Link className="nav-link" onClick={() => handleLinkClick("SignupForm")}>
                  <FaUser /> Regjistro punëtorë të rinjë
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link " 
                
                onClick={() => handleLinkClick("historia_pagesave")}>
                 <FaMoneyBill/>Historia Pagesave
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => handleLinkClick("PagesaForm")}>
                  <FaMoneyBill /> Pagesa Manuale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => handleLinkClick("porosia")}>
                  <FaMoneyBill /> Porositë libra
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => handleLinkClick("WLdashboard")}>
                  <FaMoneyBill /> Lista deshirave
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => handleLinkClick("VForm")}>
                  <FaSun /> Apliko për pushime
                </Link>
              </li>
              {IsAuthorized(['2','3'], cookies.roleId) && (
              <li id='bell' className="nav-item" style={{ fontSize: '18px' }}>
                  <PopupP />  Njoftimet
              </li>
              )}
             
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
};

export default SideBar;

