import React from 'react';
import '../css/firstView.css';
import View1 from '../ImagesOfProject/twitter_header_photo_1.png';
import View2 from '../ImagesOfProject/1.jpeg';

function View() {
  return (

    <><div class="firstView">
      <div id="whitePart"></div>
      <div className="leftImage">
         <img id='foto1' src={View1} alt="View 1" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        <button><a href="#">Log In</a></button>
         </div>
      <div className="rightImage"><img src={View2} alt="View 2" /></div>
    </div>
    <div class='textArea'>
        <div>
          <h1 id="aboutUs">About Us</h1>
          <h3 id="h3-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
          <button><a href="#">Kliko ketu</a></button>
        </div>
      </div></>
  );
}

export default View;