import React, {useState} from 'react';
import '../css/nav.css';
//import logo from '../ImagesOfProject/logo.png';
 //import profile from './images/p7.png';
 import profile from '../ImagesOfProject/p7.png';
 import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Nav(){
    const navigate = useNavigate(); // funksioni per me te dergu te profile page prej fotos se profilit 
    function navigateToProfilePage(){
        // navigate to profilePage
        navigate('/profilePage');
      };
 return  <header>
    <nav id="navi">
        <ul>
            <li ><h1 className='emri'>OCTOPUS</h1></li>
            <div id="top-right">
              <li><Link to="/feed">Home</Link></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About Us</a></li>
              <li><img src={profile} onClick={navigateToProfilePage}></img></li>
            </div>
        </ul>
    </nav>
</header>;
}

export default Nav;


