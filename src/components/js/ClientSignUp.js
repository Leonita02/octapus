import React from 'react';
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/clientSignup.css';

export default function ClientSignUpForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        emri: '',
        mbiemri: '',
        email: '',
        datelindja: '',
        qyteti: '',
        nr_tel: 0,
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        let error = null;

        const regexEmri = /^[a-zA-Z]+$/;
        const regexMbiemri = /^[a-zA-Z]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexDitelndja = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        const regexNrTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;
        const regexQyteti = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
        const regexUsername = /^[a-zA-Z0-9_-]{3,16}$/;
        const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


        switch (name) {
            case 'emri':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexEmri.test(value)) {
                    error = 'Emri jo valid!';
                }
                break;
            case 'mbiemri':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexMbiemri.test(value)) {
                    error = 'Mbiemri jo valid!';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexEmail.test(value)) {
                    error = 'Email-i jo valid!';
                }
                break;
            case 'datelindja':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexDitelndja.test(value)) {
                    error = 'Formati i datelindjes nuk eshte valid! (dd/mm/yyyy)';
                }
                break;
            case 'qyteti':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexQyteti.test(value)) {
                    error = 'Qyteti jo valid!';
                }
                break;
            case 'nr_tel':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexNrTel.test(value)) {
                    error = 'Numri i telefonit jo valid!';
                }
                break;
            case 'username':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexUsername.test(value)) {
                    error = 'Username-i duhet te permbaje nga 3 deri ne 16 karaktere alfanumerike, dhe mund te permbaje underscore (_) ose minus (-).';
                }
                break;
            case 'password':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!regexPassword.test(value)) {
                    error = 'Fjalekalimi duhet te permbaje te pakten 8 karaktere, nje shkronje te madhe, nje shkronje te vogel dhe nje numer.';
                }
                break;
            default:
                break;
        }
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: error }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.emri === '' || values.mbiemri === '' || values.email === '' || values.datelindja === '' ||
            values.qyteti === '' || values.nr_tel === '' || values.username === '' || values.password === '') {
            alert('Ju lutem plotesoni fushat');
            return
        };
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

        axios
            .post('http://localhost:8081/clientRepo/', values)
            .then((res) => {
                navigate('/logIn');
            })
            .catch((err) => 
                console.log(err));
    };

        return (
            <>
                <div className='register'>
                    <div className='col-2'>
                        <img src={bgimg} alt='' />
                    </div>
                    <div className='col-1'>
                        <h2>Regjistrohu</h2>
                        <span>Mirë se vini në Octopus</span>
                        <form action='' onSubmit={handleSubmit} id='form' className='forma'>
                            <input type='text' placeholder='Emri' id='emri' name='emri' onChange={handleInput} />
                            {errors.emri && <span className='text-danger'>{errors.emri}</span>}

                            <input type='text' placeholder='Mbiemri' id='mbiemri' name='mbiemri' onChange={handleInput} />
                            {errors.mbiemri && <span className='text-danger'>{errors.mbiemri}</span>}

                            <input type='text' placeholder='Email' id='email' name='email' onChange={handleInput} />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}

                            <input type='text' placeholder='Datelindja' id='datelindja' name='datelindja' onChange={handleInput} />
                            {errors.datelindja && <span className='text-danger'>{errors.datelindja}</span>}

                            <input type='text' placeholder='Qyteti' id='qyteti' name='qyteti' onChange={handleInput} />
                            {errors.qyteti && <span className='text-danger'>{errors.qyteti}</span>}

                            <input type='text' placeholder='Numri Telefonit' id='numri_telefonit' name='nr_tel' onChange={handleInput} />
                            {errors.nr_tel && <span className='text-danger'>{errors.nr_tel}</span>}

                            <input type='text' placeholder='Username' id='username' name='username' onChange={handleInput} />
                            {errors.username && <span className='text-danger'>{errors.username}</span>}

                            <input type='password' placeholder='Password' id='password' name='password' onChange={handleInput} />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}

                            <button className='btn' type='submit'>
                                Regjistrohu
                                <Link to='/LoginForm'></Link>
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
