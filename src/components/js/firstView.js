import React from 'react';
import '../css/firstView.css';
import View1 from '../ImagesOfProject/twitter_header_photo_1.png';
import View2 from '../ImagesOfProject/1.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function View() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    axios.get('http://localhost:8081/quotes')
      .then((response) => {
        if (response.status === 200 && response.data && response.data.quote) {
          console.log(response.data);
          setQuote(response.data.quote);
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  function navigateToAboutPage() {
    navigate('/AboutUs');
  }
  
  return (
    <>
      <div className="firstView">
        <div id="whitePart"></div>
        <div className="leftImage">
          <img id="foto1" src={View1} alt="View 1" />
          <p>
          Jemi të përkushtuar në ofrimin e një game të gjerë të librave, burimeve dhe shërbimeve për komunitetin tonë. Misioni ynë është promovimi i gjuhës shkrimore, mësimit të vazhdueshëm dhe dashurisë për leximin.<br></br>
          <Link to="/aboutUs" style={{color:"rgba(213, 68, 28, 1)"}}>Lexo më shumë rreth nesh</Link>
          </p>
          <button className="buton">
            <Link to="/LoginForm">Log in</Link>
          </button>
        </div>
        <div className="rightImage">
          <img src={View2} alt="View 2" />
        </div>
      </div>
      <div className="textArea">
        {/* <div>
          <h1 id="aboutUs">About Us</h1>

          <h3 id="h3-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </h3>
          <br></br>
          <button className="buton" onClick={navigateToAboutPage}>
            Kliko ketu
          </button>
        </div> */}
    
    <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="text-center mt-1">
        <p className="quote-text" style={{fontSize: '24px'}}>"{quote}"</p>
        <button className="btn  " style={{backgroundColor: "white",color:"rgb(3, 47, 57)",border:"2px solid black"}} onClick={fetchQuote}> Generate your quote </button>
      </div>
    </div>
  </div>
  </div>
    </>
  );
}

export default View;