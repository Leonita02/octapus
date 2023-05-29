import Nav from './nav';
import SearchBar from './searchBar';
import MainF from './MainFeed';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Kategorite from './Kategorite';
import '../css/Kategorite.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Romance(){
    const navigate = useNavigate();
    const navigateToBook = (isbn) => {
      navigate(`/bookPage/${isbn}`);
    };
    const [isSearching, setIsSearching] = useState(false);

  const handleSetIsSearching = (value) => {
    setIsSearching(value);
  };

  const [libri,setLibri] = useState([]) 

  useEffect(()=>{
    axios.get('http://localhost:8081/LibriRomance')
    .then(res => setLibri(res.data))
    .catch(err => console.log(err));

  })

    return(
        <>
            <>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      
      <center>
      <SearchBar setIsSearching={handleSetIsSearching} />
      <Kategorite></Kategorite><br></br>
        {/* {!isSearching && <MainF/>} */}
        {libri.map((data, i) => (
        <div key={i} className="flip-card" onClick={() => navigateToBook(data.Isbn)}> 
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={require(`../ImagesOfProject/${data.Url}`)}alt="Libri" />
            </div>
            <div className="flip-card-back">
              <h1>{data.Titulli}</h1>
              <p>{data.Autori}</p>
              <p>{data.Pershkrimi}</p>
            </div>
          </div>
        </div>
      ))}
        </center>
    </>
        </>
    )
}