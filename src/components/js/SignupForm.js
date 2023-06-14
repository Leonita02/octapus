import React, { useState } from 'react';
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useCookies} from 'react-cookie';


export default function SignupForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        emri: '',
        mbiemri: '',
        email: '',
        datelindja: '',
        qyteti: '',
        paga: '',
        nr_tel: '',
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInput = (event) => {
        const { name, value } = event.target;
        let error = null;

        // REGEX validation
        const regexEmri = /^[A-Za-z]+$/;
        const regexMbiemri = /^[A-Za-z]+$/;
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexDatelindja = /^\d{4}-\d{2}-\d{2}$/;
        const regexQyteti = /^[A-Za-z]+$/;
        const regexPaga = /^\d+$/;
        const regexNrTel = /^\d+$/;
        const regexUsername = /^[A-Za-z0-9_]+$/;
        const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        switch (name) {
            case 'emri':
                if (!value.trim()) {
                    error = 'Emri nuk duhet te jete e zbrazet!';
                } else if (!regexEmri.test(value)) {
                    error = 'Emri jo valid!';
                }
                break;
            case 'mbiemri':
                if (!value.trim()) {
                    error = 'Mbiemri nuk duhet te jete e zbrazet!';
                } else if (!regexMbiemri.test(value)) {
                    error = 'Mbiemri jo valid!';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email nuk duhet te jete e zbrazet!';
                } else if (!regexEmail.test(value)) {
                    error = 'Email jo valid!';
                }
                break;
            case 'datelindja':
                if (!value.trim()) {
                    error = 'Datelindja nuk duhet te jete e zbrazet!';
                } else if (!regexDatelindja.test(value)) {
                    error = 'Datelindja jo valid!';
                }
                break;
            case 'qyteti':
                if (!value.trim()) {
                    error = 'Qyteti nuk duhet te jete e zbrazet!';
                } else if (!regexQyteti.test(value)) {
                    error = 'Qyteti jo valid!';
                }
                break;
            case 'paga':
                if (!value.trim()) {
                    error = 'Paga nuk duhet te jete e zbrazet!';
                } else if (!regexPaga.test(value)) {
                    error = 'Paga jo valid!';
                }
                break;
            case 'nr_tel':
                if (!value.trim()) {
                    error = 'Numri i Telefonit nuk duhet te jete e zbrazet!';
                } else if (!regexNrTel.test(value)) {
                    error = 'Numri i Telefonit jo valid!';
                }
                break;
            case 'username':
                if (!value.trim()) {
                    error = 'Username nuk duhet te jete e zbrazet!';
                } else if (!regexUsername.test(value)) {
                    error = 'Username jo valid!';
                }
                break;
            case 'password':
                if (!value.trim()) {
                    error = 'Password nuk duhet te jete e zbrazet!';
                } else if (!regexPassword.test(value)) {
                    error = 'Password jo valid!';
                }
                break;
            default:
                break;
        }

        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleSubmitP = (event) => {
        event.preventDefault();
        if (
            values.emri === '' ||
            values.mbiemri === '' ||
            values.email === '' ||
            values.datelindja === '' ||
            values.qyteti === '' ||
            values.paga === '' ||
            values.nr_tel === '' ||
            values.username === '' ||
            values.password === ''
        ) {
            alert('Ju lutem plotësoni fushat!');
            return;
        }

        const hasErrors = Object.values(errors).some((error) => error !== null);
        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

                axios.post('http://localhost:8081/punetori/' ,values)
                .then(res => {
                    navigate('/sideBar');
                })
                .catch(err => console.log(err));

            }
            
    const handleSubmitM = (event) => {
        event.preventDefault();
        if (
            values.emri === '' ||
            values.mbiemri === '' ||
            values.email === '' ||
            values.datelindja === '' ||
            values.qyteti === '' ||
            values.paga === '' ||
            values.nr_tel === '' ||
            values.username === '' ||
            values.password === ''
        ) {
            alert('Ju lutem plotësoni fushat!');
            return;
        }

        const hasErrors = Object.values(errors).some((error) => error !== null);
        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

        axios
            .post('http://localhost:8081/menaxheri/', values)
            .then((res) => {
                navigate('/sideBar');
            })
            .catch((err) => console.log(err));
    };
    const [cookies] = useCookies(['userId', 'roleId']);
                    const isAuthorized = (allowedRoles) => {
                      const userRole = cookies.roleId;
                      return allowedRoles.includes(userRole);
                    };
                  
                    if (!isAuthorized([ '1'])) {
                      return (
                        <div>
                          <h1>Unauthorized Access</h1>
                          {/* Additional unauthorized access handling */}
                        </div>
                      );
                    }
 
 

    return (
        <>
            <div className='register'>
                <div className='col-2'>
                    <img src={bgimg} alt='' />
                </div>
                <div className='col-1'>
                    <h2>
                        {' '}
                        Regjistro <b>STAFIN</b>{' '}
                    </h2>
                    <span> Mirëse vini në Octopus</span>
                    <form id='form' className='forma'>
                        <input
                            type='text'
                            className={`form-control ${errors.emri ? 'is-invalid' : ''}`}
                            placeholder='Emri'
                            id='emri'
                            name='emri'
                            value={values.emri}
                            onChange={handleInput}
                            required
                        />
                        {errors.emri && <span className='text-danger'>{errors.emri}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.mbiemri ? 'is-invalid' : ''}`}
                            placeholder='Mbiemri'
                            id='mbiemri'
                            name='mbiemri'
                            value={values.mbiemri}
                            onChange={handleInput}
                            required
                        />
                        {errors.mbiemri && <span className='text-danger'>{errors.mbiemri}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                            required
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.datelindja ? 'is-invalid' : ''}`}
                            placeholder='Datelindja'
                            id='datelindja'
                            name='datelindja'
                            value={values.datelindja}
                            onChange={handleInput}
                            required
                        />
                        {errors.datelindja && (
                            <span className='text-danger'>{errors.datelindja}</span>
                        )}

                        <input
                            type='text'
                            className={`form-control ${errors.qyteti ? 'is-invalid' : ''}`}
                            placeholder='Qyteti'
                            id='qyteti'
                            name='qyteti'
                            value={values.qyteti}
                            onChange={handleInput}
                            required
                        />
                        {errors.qyteti && <span className='text-danger'>{errors.qyteti}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.paga ? 'is-invalid' : ''}`}
                            placeholder='Paga'
                            id='paga'
                            name='paga'
                            value={values.paga}
                            onChange={handleInput}
                            required
                        />
                        {errors.paga && <span className='text-danger'>{errors.paga}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.nr_tel ? 'is-invalid' : ''}`}
                            placeholder='Numri Telefonit'
                            id='numri_telefonit'
                            name='nr_tel'
                            value={values.nr_tel}
                            onChange={handleInput}
                            required
                        />
                        {errors.nr_tel && <span className='text-danger'>{errors.nr_tel}</span>}

                        <input
                            type='text'
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            placeholder='Username'
                            id='username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                            required
                        />
                        {errors.username && (
                            <span className='text-danger'>{errors.username}</span>
                        )}

                        <input
                            type='password'
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder='Password'
                            id='password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            required
                        />
                        {errors.password && (
                            <span className='text-danger'>{errors.password}</span>
                        )}

                        <button className='butn' type='submit' onClick={handleSubmitP}>
                            Regjistro si Punetorë
                        </button>
                        <button className='butn' type='submit' onClick={handleSubmitM}>
                            Regjistro si Menaxherë
                        </button>                    </form>
                </div>
            </div>
        </>
    );
}
