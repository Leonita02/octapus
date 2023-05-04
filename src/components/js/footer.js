import React from "react";
import logo from '../ImagesOfProject/instagram_profile_image.png';
import '../css/footer.css';
import fbLogo from '../ImagesOfProject/facebook.png';
import instaLogo from '../ImagesOfProject/instagram.png';
import twitterLogo from '../ImagesOfProject/twitter.png';


function footer(){
    return(

        <footer>
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="socialLogo">
            <ul>
              <li><img src={fbLogo} alt="Facebook"/></li>
              <li><img src={instaLogo} alt="Instagram"/></li>
              <li><img src={twitterLogo} alt="Twitter"/></li>
            </ul>
          </div>
        </div>
      </footer>


    );
}

export default footer;