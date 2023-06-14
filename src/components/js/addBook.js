import '../css/addBook.css';
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function AddBook(){

  const [isbn,setIsbn]=useState("")
    const [titulli,setTitulli]=useState("")
    const [Autori,setAutori]=useState("")
    const [vitiBotimit,setVitiBotimit]=useState(0)
    const[shtepiaBotimit,setShtepiaBotimit] = useState("")
    const [sasia,setSasia]=useState(0)
    const [pershkrimi,setPershkrimi]=useState("")
    const [url,setUrl]=useState("")
    const [zhanri,setZhanri]=useState("")
    const [rafti,setRafti]=useState(0)
    const navigate=useNavigate()
    const [cookies] = useCookies(['userId', 'roleId']);
    const [isbnError, setIsbnError] = useState('');
    const [titulliError, setTitulliError] = useState('');
    const [AutoriError, setAutoriError] = useState('');
    const [vitiBotimitError, setVitiBotimitError] = useState('');
    const [shtepiaBotimitError, setShtepiaBotimitError] = useState('');
    const [sasiaError, setSasiaError] = useState('');
    const [pershkrimiError, setPershkrimiError] = useState('');
    const [urlError, setUrlError] = useState('');
    const [zhanriError, setZhanriError] = useState('');
    const [raftiError, setRaftiError] = useState('');
    const isAuthorized = (allowedRoles) => {
      const userRole = cookies.roleId;
      return allowedRoles.includes(userRole);
    };
  
    if (!isAuthorized([ '3'])) {
      return (
        <div>
          <h1>Unauthorized Access</h1>
          {/* Additional unauthorized access handling */}
        </div>
      );
    }

  function handleSubmit(event) {
    event.preventDefault();

    // Perform input validation
    let isValid = true;
    switch (true) {
      case !isbn:
        setIsbnError('Isbn is required');
        isValid = false;
        break;
      case !titulli:
        setTitulliError('Titulli is required');
        isValid = false;
        break;
      case !Autori:
        setAutoriError('Autori is required');
        isValid = false;
        break;
      case !vitiBotimit:
        setVitiBotimitError('Viti i botimit is required');
        isValid = false;
        break;
      case !shtepiaBotimit:
        setShtepiaBotimitError('Shtepia e botimit is required');
        isValid = false;
        break;
      case !sasia:
        setSasiaError('Sasia is required');
        isValid = false;
        break;
      case !pershkrimi:
        setPershkrimiError('Pershkrimi is required');
        isValid = false;
        break;
      case !url:
        setUrlError('Url is required');
        isValid = false;
        break;
      case !zhanri:
        setZhanriError('Zhanri is required');
        isValid = false;
        break;
      case !rafti:
        setRaftiError('Rafti is required');
        isValid = false;
        break;
      default:
        // Reset the error messages
        setIsbnError('');
        setTitulliError('');
        setAutoriError('');
        setVitiBotimitError('');
        setShtepiaBotimitError('');
        setSasiaError('');
        setPershkrimiError('');
        setUrlError('');
        setZhanriError('');
        setRaftiError('');
    }

    if (isValid) {
      axios
        .post('http://localhost:8081/libri', {
          isbn,
          titulli,
          Autori,
          vitiBotimit,
          shtepiaBotimit,
          sasia,
          pershkrimi,
          url,
          zhanri,
          rafti,
        })
        .then((res) => {
          console.log(res);
          navigate('/sideBar'); 
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <section>
        <div className='register'>
          <div className='row  '>
            <center>
              <h2>Shto Libër!</h2>
            </center>
            <hr />
            <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
              <input
                type='text'
                className='form-control'
                placeholder='Isbn:'
                id='isbn'
                onChange={(e) => setIsbn(e.target.value)}
              />
              {isbnError && <span className='text-danger'>{isbnError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Titulli:'
                id='titulli'
                onChange={(e) => setTitulli(e.target.value)}
              />
              {titulliError && <span className='text-danger'>{titulliError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Autori:'
                id='Autori'
                onChange={(e) => setAutori(e.target.value)}
              />
              {AutoriError && <span className='text-danger'>{AutoriError}</span>}

              <input
                type='date'
                className='form-control'
                placeholder='Viti i botimit:'
                id='vitiBotimit'
                onChange={(e) => setVitiBotimit(e.target.value)}
              />
              {vitiBotimitError && <span className='text-danger'>{vitiBotimitError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Shtepia e botimit:'
                id='shtepiaBotimit'
                onChange={(e) => setShtepiaBotimit(e.target.value)}
              />
              {shtepiaBotimitError && <span className='text-danger'>{shtepiaBotimitError}</span>}

              <input
                type='number'
                className='form-control'
                placeholder='Sasia:'
                id='sasia'
                onChange={(e) => setSasia(e.target.value)}
              />
              {sasiaError && <span className='text-danger'>{sasiaError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Pershkrimi:'
                id='pershkrimi'
                onChange={(e) => setPershkrimi(e.target.value)}
              />
              {pershkrimiError && <span className='text-danger'>{pershkrimiError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Url:'
                id='url'
                onChange={(e) => setUrl(e.target.value)}
              />
              {urlError && <span className='text-danger'>{urlError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Zhanri:'
                id='zhanri'
                onChange={(e) => setZhanri(e.target.value)}
              />
              {zhanriError && <span className='text-danger'>{zhanriError}</span>}

              <input
                type='text'
                className='form-control'
                placeholder='Rafti:'
                id='rafti'
                onChange={(e) => setRafti(e.target.value)}
              />
              {raftiError && <span className='text-danger'>{raftiError}</span>}

              <button id='btn' type='submit' className='btn'>
                Shto
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddBook;
