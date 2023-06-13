import React from 'react';
// import Order from '../css/porosia.css';
import Nav from '../js/nav';
import Footer from '../js/footer';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Porosia() {
  const [numriBibliotekes, setNumriBibliotekes] = useState('');
  const [menaxheri, setMenaxheri] = useState('');
  const [furnitori, setFurnitori] = useState('');
  const [porosia, setPorosia] = useState('');
  const [numriBibliotekesError, setNumriBibliotekesError] = useState('');
  const [menaxheriError, setMenaxheriError] = useState('');
  const [furnitoriError, setFurnitoriError] = useState('');
  const [porosiaError, setPorosiaError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post('http://localhost:8081/porosia', { numriBibliotekes, menaxheri, furnitori, porosia })
        .then(res => {
          console.log(res);
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }

  function validateForm() {
    const numriBibliotekesRegex = /^\d+$/;
    const stringRegex = /^[a-zA-Z\s]+$/;
    let isValid = true;

    if (!numriBibliotekesRegex.test(numriBibliotekes)) {
      setNumriBibliotekesError('Numri i Bibliotekes duhet te jete nje numer i plote pozitiv.');
      isValid = false;
    } else {
      setNumriBibliotekesError('');
    }

    if (!stringRegex.test(menaxheri)) {
      setMenaxheriError('Menaxheri duhet te permbaje vetem shkronja dhe hapesira.');
      isValid = false;
    } else {
      setMenaxheriError('');
    }

    if (!stringRegex.test(furnitori)) {
      setFurnitoriError('Furnitori duhet te permbaje vetem shkronja dhe hapesira.');
      isValid = false;
    } else {
      setFurnitoriError('');
    }

    if (!stringRegex.test(porosia)) {
      setPorosiaError('Porosia duhet te permbaje vetem shkronja dhe hapesira.');
      isValid = false;
    } else {
      setPorosiaError('');
    }

    return isValid;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Porosia e Librave</h1>
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="numriBibliotekes" className="form-label"><b>Numri i Bibliotekes</b></label>
              <input
                type="text"
                className="form-control"
                id="numriBibliotekes"
                name="nrBibliotekes"
                placeholder="Shto Numrin e Bibliotekes"
                value={numriBibliotekes}
                onChange={e => {
                  setNumriBibliotekes(e.target.value);
                  if (!/^\d+$/.test(e.target.value)) {
                    setNumriBibliotekesError('Numri i Bibliotekes duhet te jete nje numer i plote pozitiv.');
                  } else {
                    setNumriBibliotekesError('');
                  }
                }}
              />
              {numriBibliotekesError && <span className="error">{numriBibliotekesError}</span>}
            </div>

            <div className="input-box">
              <label htmlFor="menaxheri" className="form-label"><b>Menaxheri</b></label>
              <input
                type="text"
                className="form-control"
                id="menaxheri"
                name="menaxheri"
                placeholder="Shto Menaxherin"
                value={menaxheri}
                onChange={e => {
                  setMenaxheri(e.target.value);
                  if (!/^[a-zA-Z\s]+$/.test(e.target.value)) {
                    setMenaxheriError('Menaxheri duhet te permbaje vetem shkronja dhe hapesira.');
                  } else {
                    setMenaxheriError('');
                  }
                }}
              />
              {menaxheriError && <span className="error">{menaxheriError}</span>}
            </div>

            <div className="input-box">
              <label htmlFor="furnitori" className="form-label"><b>Furnitori</b></label>
              <input
                type="text"
                className="form-control"
                id="furnitori"
                name="furnitori"
                placeholder="Shto Furnitorin"
                value={furnitori}
                onChange={e => {
                  setFurnitori(e.target.value);
                  if (!/^[a-zA-Z\s]+$/.test(e.target.value)) {
                    setFurnitoriError('Furnitori duhet te permbaje vetem shkronja dhe hapesira.');
                  } else {
                    setFurnitoriError('');
                  }
                }}
              />
              {furnitoriError && <span className="error">{furnitoriError}</span>}
            </div>

            <div className="input-box">
              <label htmlFor="porosia" className="form-label"><b>Porosia</b></label>
              <input
                type="text"
                className="form-control"
                id="porosia"
                name="porosia"
                placeholder="Shto Porosine"
                value={porosia}
                onChange={e => {
                  setPorosia(e.target.value);
                  if (!/^[a-zA-Z\s]+$/.test(e.target.value)) {
                    setPorosiaError('Porosia duhet te permbaje vetem shkronja dhe hapesira.');
                  } else {
                    setPorosiaError('');
                  }
                }}
              />
              {porosiaError && <span className="error">{porosiaError}</span>}
            </div>
            <br />

            <div>
              <center>
                <button type="submit" className="btn btn-primary">Porosit</button>
              </center>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Porosia;
