import React, { useState, useEffect } from 'react';
import Nav from './nav';
import SearchBar from './searchBar';
import MainF from './MainFeed';
import axios from 'axios';
import '../css/Kategorite.css';
import Kategorite from './Kategorite';

export default function Feed() {
  const [isSearching, setIsSearching] = useState(false);
  const [genre, setGenre] = useState('');

  const handleSetIsSearching = (value) => {
    setIsSearching(value);
  };

  useEffect(() => {
    fetchData();
  }, [genre]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/LibriRomance/Romance`);

      const cards = response.data;

      console.log(cards);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />

      <center>
        <SearchBar setIsSearching={handleSetIsSearching} />

        {!isSearching && (
          <>
            <Kategorite />
            <MainF />
          </>
        )}
      </center>
    </>
  );
}