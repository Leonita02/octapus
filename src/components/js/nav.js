import React, {useState} from 'react'
import '../css/nav.css';
//import logo from '../ImagesOfProject/logo.png';
 //import profile from './images/p7.png';
 import profile from '../ImagesOfProject/favicon.png';
function nav(){
    return  <header>
    <nav id="navi">
        <ul>
            <li ><h1 className='emri'>OCTOPUS</h1></li>
            <div id="top-right">
              <li><a  href="C:\Users\Altina\Desktop\fk\WEB\Projekti\html\HP.html">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About Us</a></li>
              <li><img src={profile}></img></li>
            </div>
        </ul>
    </nav>
</header>;
}

export default nav;


