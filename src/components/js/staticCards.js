import foto from '../ImagesOfProject/111.jfif';
import foto1 from '../ImagesOfProject/114.jfif';
import foto2 from '../ImagesOfProject/115.jfif';
import foto3 from '../ImagesOfProject/116.jfif';
import foto4 from '../ImagesOfProject/117.jfif';
import foto5 from '../ImagesOfProject/118.jfif';
import '../css/MainFeed.css';

function StaticCards(){
    return  <>
    
            <center>
    <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto} alt="Libri" /> 
      </div>
    </div>
  </div>

  <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto1} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto1} alt="Libri" /> 
      </div>
    </div>
  </div>

  <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto2} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto2} alt="Libri" /> 
      </div>
    </div>
  </div>

  <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto3} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto3} alt="Libri" /> 
      </div>
    </div>
  </div>

  <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto4} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto4} alt="Libri" /> 
      </div>
    </div>
  </div>

  <div  className="flip-card"> 
    <div className="flip-card-inner">
      <div className="flip-card-front">
         <img src={foto5} alt="Libri" /> 
      </div>
      <div className="flip-card-back">
      <img src={foto5} alt="Libri" /> 
      </div>
    </div>
  </div>
  </center>
  
  </>
}

export default StaticCards;