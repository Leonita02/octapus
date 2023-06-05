import React, { useState } from 'react';
import axios from 'axios';
import '../css/Sbar.css';

import { useNavigate } from 'react-router';
import Kategorite from './Kategorite';

function SearchBar({ setIsSearching }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const navigateToBook = (isbn) => {
    navigate(`/bookPage/${isbn}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSearching(true); // Set isSearching to true during the search

    // Make an API call to your backend endpoint
    axios
      .get('http://localhost:8081/search', {
        params: { term: searchTerm }
      })
      .then((response) => {
        console.log(response.data);
        const results = response.data;
        setSearchResults(results);
        setNoResults(results.length === 0);
      })
      .catch((error) => {
        console.error('Error searching:', error);
        setNoResults(true);
      })
     
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id=""
        placeholder="    Kërko titullin.."
        name="s"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">  Kërko  </button>
      <br></br>
    
      {/* Render the search results */}
      {noResults ? (
        <p>Asnjë rezultat për "{searchTerm}" ...</p>
      ) : (
        searchResults.map((data, i) => (
          <div key={`card-${i}`} className="flip-card" onClick={() => navigateToBook(data.Isbn)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={require(`../ImagesOfProject/${data.Url}`)} alt="Libri" />
              </div>
              <div className="flip-card-back">
                <h1>{data.Titulli}</h1>
                <p>{data.Autori}</p>
                <p>{data.Pershkrimi}</p>
              </div>
            </div>
          </div>
          
        ))
      )}
    </form>
  );
}

export default SearchBar;


