import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';


export default function PagesaForm() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        Personi_ID: '',
        qyteti: '',
        email: '',
        emriKarteles: '',
        nrKarteles: '',
        data_pageses: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    
    useEffect(() => {
        if (successMessage === "Pagesa u krye me sukses") {
          navigate('/sideBar');
        }
      }, [successMessage, navigate]);

    

    const handleInput = (event) => {
        const { name, value } = event.target;
        let error = null;
        //Regex validation
        const regexPersoni_ID = /^[A-Za-z0-9]{1,}$/;
        const regexQyteti = /^[A-Za-z]+$/;
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexEmriKarteles = /^[A-Za-z]+$/;
        const regexNrKarteles = /^[0-9]{5,}$/;
       const regexDataPageses = /^\d{4}-\d{2}-\d{2}$/;

        switch (name) {
            case 'Personi_ID':
                if (!regexPersoni_ID.test(value)) {
                    error = 'Invalid Personi ID';
                }
                break;
            case 'qyteti':
                if (!regexQyteti.test(value)) {
                    error = 'Invalid Qyteti';
                }
                break;
            case 'email':
                if (!regexEmail.test(value)) {
                    error = 'Invalid Email';
                }
                break;
            case 'emriKarteles':
                if (!regexEmriKarteles.test(value)) {
                    error = 'Invalid Emri i Karteles';
                }
                break;
            case 'nrKarteles':
                if (!regexNrKarteles.test(value)) {
                    error = 'Invalid Numri i Karteles';
                }
                break;
            case 'data_pageses':
                if (!regexDataPageses.test(value)) {
                    error = 'Invalid Data e Pageses';
                }
                break;
            default:
                break;
        }

        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: error }));
    };



    const handleSubmitP = (event) => {
        event.preventDefault();
        //Checking if there are any errors for the validation with regex
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

       axios.post('http://localhost:8081/pagesaRepo/', values)
        .then((res) => {
            const responseMessage = res.data.message;
            console.log('Response:', responseMessage);
            // Display the success message to the user
            setSuccessMessage(responseMessage);
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
            <div className='register'>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-1'>

                    <h2> Paguaj Kesh </h2>
                    <form action="" id='form' className='forma' >

                        <input type="text" placeholder='Personi_ID' id='Personi_ID' name='Personi_ID' onChange={handleInput} />
                        {errors.Personi_ID && <span className="text-danger">{errors.Personi_ID}</span>}

                        <input type="text" placeholder='Qyteti' id='Qyteti' name='Qyteti' onChange={handleInput} />
                        {errors.Qyteti && <span className="text-danger">{errors.Qyteti}</span>}

                        <input type="text" placeholder='Email' id='email' name='email' onChange={handleInput} />
                        {errors.email && <span className="text-danger">{errors.email}</span>}


                        <input type="text" placeholder='EmriKarteles' id='emriKarteles' name='emriKarteles' onChange={handleInput} />
                        {errors.emriKarteles && <span className="text-danger">{errors.emriKarteles}</span>}

                        <input type="text" placeholder='nrKarteles' id='nrKarteles' name='nrKarteles' onChange={handleInput} />
                        {errors.nrKarteles && <span className="text-danger">{errors.nrKarteles}</span>}

                        <input type="text" placeholder='Data e Pageses' id='data_pageses' name='data_pageses' onChange={handleInput} />
                        {errors.data_pageses && <span className="text-danger">{errors.data_pageses}</span>}


                        <button className='butn' type='submit' onClick={handleSubmitP}>Paguaj</button>


                    </form>

                </div>
            </div>

        </>
    )
}


