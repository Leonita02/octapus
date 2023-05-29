import React from 'react';
import Nav from './nav';
import SearchBar from './searchBar';
import MainF from './MainFeed';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Kategorite from './Kategorite';
import '../css/Kategorite.css';
export default function Feed() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSetIsSearching = (value) => {
    setIsSearching(value);
  };

  return (
    <>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
      
      <center>
      <SearchBar setIsSearching={handleSetIsSearching} />
      <Kategorite></Kategorite>
        {!isSearching && <MainF/>}
        </center>
    </>
  );
}
