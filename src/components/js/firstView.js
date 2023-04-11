import React from 'react';
import '../css/firstView.css';
import View1 from '../ImagesOfProject/foto2.avif';
import View2 from '../ImagesOfProject/foto1.avif';

function View() {
    return (
        
      <><div class="firstView">
            <div className="leftImage"><img src={View1} alt="View 1" /></div>
            <div className="rightImage"><img src={View2} alt="View 2" /></div>
        </div><div class='textArea'>
                <div>
                    <h1 id="aboutUs">About Us</h1>
                    <h3 id="h3-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                    <button><a href="#">Kliko ketu</a></button>
                </div>
            </div></>
    );
  }

export default View;