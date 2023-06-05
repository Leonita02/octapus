import React from 'react';
import bib from '../ImagesOfProject/library.jpg';
import Nav from './nav';

const AboutPage = () => {
  return (
    <>
      <Nav></Nav>
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
    </>
  );
};

export default AboutPage;