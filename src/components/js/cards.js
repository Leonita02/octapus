import '../css/cards.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import photo from '../ImagesOfProject/c1.jpg'


function Card() {
  const navigate = useNavigate();
  const navigateToBook = (isbn) => {
    navigate(`/bookPage/${isbn}`);
  };
 
  const [libri, setLibri] = useState([]);
  const imagePath = '../ImagesOfProject/';

  useEffect(() => {
    axios.get('http://localhost:8081/libri')
      .then(res => setLibri(res.data))
      .catch(err => console.log(err));
  }, []);

  
 
  
 

  return (
    <>
   
      {libri.map((data, i) => (
        <div key={i} className="flip-card" onClick={() => navigateToBook(data.Isbn)}> 
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {/* <img src={require(`../ImagesOfProject/${data.Url}`)} alt="Libri" /> */}
            </div>
            <div className="flip-card-back">
              <h1>{data.Titulli}</h1>
              <p>{data.Autori}</p>
              <p>{data.Pershkrimi}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
 // const handleDeleteL = async (Isbn) => {
  //   try {
  //     await axios.delete(`http://localhost:8081/libri/${Isbn}`);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
export default Card;

