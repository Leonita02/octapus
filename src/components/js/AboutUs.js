import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bib from '../ImagesOfProject/library.jpg';
import Footer from './footer';
import { useNavigate } from 'react-router';


function AboutPage(){
  const navigate = useNavigate();
  function navigateToHomePage(){
    navigate('/');
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">

        <h1 className="mt-4 mb-4">Rreth Bibliotekës Tonë</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src={bib}
              alt="Biblioteka"
              className="img-fluid"
              style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <div
              className="about-text"
              style={{
                border: '2px solid #ccc',
                padding: '20px',
                borderRadius: '10px',
                height: '70vh',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2
                style={{
                  color: '#333',
                  marginBottom: '20px',
                  borderBottom: '2px solid #ccc',
                  paddingBottom: '10px',
                }}
              >
                Mirë se vini në bibliotekën tonë!
              </h2>
              <p>
                Jemi të përkushtuar në ofrimin e një game të gjerë të librave, burimeve dhe shërbimeve për komunitetin tonë. Misioni ynë është promovimi i gjuhës shkrimore, mësimit të vazhdueshëm dhe dashurisë për leximin.
              </p>
              <p>
                Biblioteka jonë ofron një koleksion të ndryshëm librash, përfshirë fiktion, jo-fiktion, klasikë, literaturë për fëmijë, dhe më shumë. Ne vëmendje të veçantë i kushtojmë interesave dhe nevojave të të gjitha grupmoshave, nga lexuesit e rinj deri te të rriturit.
              </p>
              <p>
                Përveç koleksionit të gjerë të librave, ofrojmë edhe qasje në burimet dixhitale, si libra elektronikë, libra audio dhe bazat e të dhënave online. Biblioteka jonë është pajisur me ambiente të rehatshme për lexim, zona studimi dhe stacione kompjuterike për të përmirësuar përvojën e mësimit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            onClick={() => {
              navigateToHomePage();
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <h3 style={{ color: '#333' }}>Lokacioni i bibliotekës tonë</h3>
        <p style={{ fontStyle: 'italic' }}>Biblioteka "Octopus"</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358.94140358501954!2d21.155354812315704!3d42.65267659031529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fc8b3fbba07%3A0xff5de5dadf78906!2zQmlibGlvdGVrYSDigJxIaXZ6aSBTeWxlam1hbmnigJ0!5e0!3m2!1sen!2s!4v1686143293473!5m2!1sen!2s"
            width="800"
            height="500"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br/>
        <br/>
        <div className='textMap'>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: '10px' }}
            />
            Contact Us on our email:
          </p>
          <p>octopus@gmail.com</p>
          <br />
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginRight: '10px' }}
            />
            On our Phone:
          </p>
          <p>+383-44-111-222</p>
          <h2>We are everywhere with you!</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AboutPage;
