import '../css/cards.css';
import foto from '../ImagesOfProject/c1.jpg';
import { useNavigate } from 'react-router';
function Card(){
  const navigate = useNavigate();
  const navigateToBook = () =>{
    navigate('/bookPage');
  };
    return <>   
    <div className="flip-card">
      <div className="flip-card-inner" onClick={navigateToBook}>
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
export default Card;