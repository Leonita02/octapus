import React from 'react';
import Nav from './nav';
import SearchBar from './searchBar';
import MainF from './MainFeed';
import { useState } from 'react';

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
  
      <SearchBar setIsSearching={handleSetIsSearching} />
      {!isSearching && <MainF />}
    </>
  );
}
