import '../css/cards.css';
import foto from '../ImagesOfProject/libri.avif';
function card(){
    return <>   
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={foto} alt="Avatar"/>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div></>
}
export default card;