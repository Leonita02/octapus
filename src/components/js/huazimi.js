import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Huazimi() {
  // const [isbn, setIsbn] = useState('');
  // const [personi, setPersoni] = useState('');
  // const [dataHuazimit, setDataHuazimit] = useState('');
  // const [dataKthimit, setDataKthimit] = useState('');
  const navigate = useNavigate();
  const [values, setValues] = useState({
    isbn: '',
    personi: '',
    dataHuazimit: '',
    dataKthimit: ''
  });

  const [errors, setErrors] = useState({});


  function handleInput(event) {
    const { name, value } = event.target;
    let error = null;

    //REGEX validation
    const isbnRegex = /^\d{10}$/; // ISBN should be exactly 10 digits
    const personiRegex = /^\d+$/; // ID should be numeric


    switch (name) {
      case 'isbn':
        if (!value.trim()) {
          error = 'Fusha nuk duhet te jete e zbrazet!';
        }
        else if (!isbnRegex.test(value)) {
          error = 'isbn jo valide!';
        }
        break;
      case 'personi':
        if (!value.trim()) {
          error = 'Fusha nuk duhet te jete e zbrazet!';
        }
        else if (!personiRegex.test(value)) {
          error = 'ID jo valide!';
        }
        break;
      case 'dataHuazimit':
        if (!value.trim()) {
          error = 'Fusha nuk duhet te jete e zbrazet!';
          break;
        }
      case 'dataKthimit':
        if (!value.trim()) {
          error = 'Fusha nuk duhet te jete e zbrazet!'
        }
        break;
      default:
        break;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event)=>{
    event.preventDefault();

    if (values.isbn === '' || values.personi === '' || values.dataHuazimit === '' || values.dataKthimit === '') {
      alert('Ju lutem plotësoni fushat!');
      return;
    }
    const hasErrors = Object.values(errors).some((error) => error !== null);

    if(hasErrors){
      console.log('Form contains errors',errors);
    }
  
  axios
    .post('http://localhost:8081/huazimi', {
      isbn:values.isbn,
      personi:values.personi,
      dataHuazimit:values.dataHuazimit,
      dataKthimit:values.dataKthimit
    })
    .then((res) => {
      console.log(res);
      navigate('/sidebar');
    })
    .catch((err) => console.log(err));

  };


  return (
    <>
      <br />
      <br />
      <br />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div
            className="col-lg-6"
            style={{ backgroundColor: '#f8f9fa', border: '1px solid gray' }}
          >
            <div className="huazimi-librit">
              <br />
              <h1 className="text-center">
                <b>Huazimi i librit</b>
              </h1>
              <hr className="my-4" />
              <form >
                <div className="form-group mb-4">
                  <label htmlFor="isbn">ISBN e librit:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.isbn ? 'is-invalid' : ''}`}
                    id="isbn"
                    value={values.isbn}
                    name='isbn'
                    onChange={handleInput}
                    required
                  />
                   {errors.isbn && <div className="invalid-feedback">{errors.isbn}</div>}
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="personi">ID e Lexuesit:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.personi ? 'is-invalid' : ''}`}
                    id="personi"
                    value={values.personi}
                    name='personi'
                    onChange={handleInput}
                    required
                  />
                   {errors.personi && <div className="invalid-feedback">{errors.personi}</div>}
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="dataHuazimit">Data e Huazimit</label>
                  <input
                    type="date"
                    className={`form-control ${errors.dataHuazimit ? 'is-invalid' : ''}`}
                    id="dataHuazimit"
                    value={values.dataHuazimit}
                    name='dataHuazimit'
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="dataKthimit">Data e Kthimit</label>
                  <input
                    type="date"
                    className={`form-control ${errors.dataKthimit ? 'is-invalid' : ''}`}
                    id="dataKthimit"
                    value={values.dataKthimit}
                    name='dataKthimit'
                    onChange={handleInput}
                    required
                  />
                    {errors.dataKthimit && <div className="invalid-feedback">{errors.dataKthimit}</div>}
                </div>
                <div className="text-center">
                <button className="btn btn-primary btn-lg btn-block custom-button pb-5 col-3" type="submit" onClick={handleSubmit}>
                    Regjistro huazimin
                  </button>

                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


