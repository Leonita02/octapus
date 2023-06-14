import React, {useState} from 'react';
import '../css/nav.css';
//import logo from '../ImagesOfProject/logo.png';
 //import profile from './images/p7.png';
 import profile from '../ImagesOfProject/p7.png';
 import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';


function Nav() {
    const navigate = useNavigate();
    const [notification, setNotification] = useState('');
  
    function navigateToProfilePage() {
      navigate('/profilePage');
    }
  
    return (
      <header>
        <nav id="navi">
          <ul>
            <li>
              <h1 className='emri'>OCTOPUS</h1>
            </li>
            <div id="top-right">
              <li>
                <Link to="/feed">Home</Link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li id='bell'>
                <Popup />
              </li>
              <li>
                <img src={profile} onClick={navigateToProfilePage} />
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }

export default Nav;


