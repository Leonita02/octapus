import React from "react";
import logo from '../ImagesOfProject/logo.png';
import '../css/footer.css';
import fbLogo from '../ImagesOfProject/fbIcon.png';
import instaLogo from '../ImagesOfProject/instaLogo.png';
import twitterLogo from '../ImagesOfProject/twitter.jpg';


function footer(){
    return(

    <div class="footer">
        <div class="footer-logo">
            <li><img src={logo}></img></li>
        </div>
        <div class="socialLogo">
            <li><img src={fbLogo}></img></li>
            <li><img src={instaLogo}></img></li>
            <li><img src={twitterLogo}></img></li>
        </div>
    </div>


    );
}

export default footer;