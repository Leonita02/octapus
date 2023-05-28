 import Nav from './nav';
 import '../css/bookPage.css';
import Foto from '../ImagesOfProject/crimeP.jpg';
import Footer from './footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookPage() {
  const { id } = useParams();
  const [libri, setLibri] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/bookPage/${id}`);
        const bookData = response.data;
        setLibri(bookData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);
  if (libri === null) {
    return <div>Loading...</div>;
  }
     return(
        <>
       
      <Nav></Nav>
           
                <div className="komplet">
                <div className="foto">
                <img src ={require(`../ImagesOfProject/${libri.Url}`)}  id ="fotoja" alt='foto'></img>
                </div>
                <div className="info">
                    <h1 id='bookName'>{libri.Titulli}</h1>
                    <h3 id='authorName'>{libri.Autori}</h3>
                    <h4>{libri.Isbn}</h4>
                        <h4 id="pubYear">{libri.Viti_Publikimit}</h4>
                    <h3>Në dispozicion : {libri.Nr_Kopjeve}</h3>
                    <input  type="button" id="reserve" value="Rezervo librin"></input>
                    
                        <hr></hr>
                        
                       
                    </div>
                </div>
                <div className='desc'>
                    <h2>Përshkrimi</h2>
                    <p id='description'>{libri.Pershkrimi}</p>
                </div>
      
              
            
        <Footer></Footer>
     


      
        
        
        
        </>





    )




}
export default BookPage;