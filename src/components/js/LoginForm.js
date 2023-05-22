import React from 'react'
import bgimg from '../ImagesOfProject/img44.jpeg';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        Username: '',
        Password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.username === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        // if(data.role===4){
                        //     navigate('/feed');
                        // }
                        
                    }
                    else {
                        alert("Nuk ekziston asnjë regjistrim");
                    }

                })
                .catch(err => console.log(err));

        }
    }

    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2> Log In</h2>
                    <span> Enjoy The Service</span>
                    <form action="" onSubmit={handleSubmit} id='form' className='flex flex-col'>
                        <input type="text" placeholder='Username' onChange={handleInput} name='username' />
                        {errors.username && <span className='text-danger'>{errors.username}</span>}

                        <input type="text" placeholder='Password' onChange={handleInput} name='password' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <button type='submit' className='btnn w-100'><Link to='/feed'>Kyqu</Link></button>
                        <button className='btnn btn-default border w-100 rounded-0 text-decoration-none '><Link to='/ClientSignUpForm'>Regjistrohu</Link></button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
            </div>
        </section>
    )

}