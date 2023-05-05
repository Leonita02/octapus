import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useState} from 'react';
import Validation from './SignUpValidation';
import {Link} from 'react-router-dom';


export default function ClientSignUpForm() {

    const navigate = useNavigate();
    const [values,setValues] = useState({
        emri:'',
        Username:'',
        Password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.emri === "" && errors.mbiemri ==="" && errors.email ==="" && errors.ditelindja === ""
            && errors.qyteti ==="" && errors.paga ==="" && errors.numri_telefonit ==="" && errors.username === "" && errors.password ===""){

                axios.post('http://localhost:8081/signUp' ,values)
                .then(res => {
                    navigate('/logIn');
                })
                .catch(err => console.log(err));

            }
    }

    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-2'>
                    <h2> Sign Up </h2>
                    <span> Welcome to Octopus</span>
                    <form action="" onSubmit={handleSubmit}  id='form' className='flex flex-col' >
                        <input type="text" placeholder='Emri' id='emri' name='emri' onChange={handleInput} />
                        {errors.emri && <span className='text-danger'>{errors.emri}</span>}

                        <input type="text" placeholder='Mbiemri' id='mbiemri' name='mbiemri' onChange={handleInput}/>
                        {errors.mbiemri && <span className='text-danger'>{errors.mbiemri}</span>}

                        <input type="email" placeholder='Email' id='email' name='email'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}

                        <input type="text" placeholder='Username' id='username' name='username'/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}

                        <input type="password" placeholder='Password' id='password' name='password'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <input type="text" placeholder='Datelindja' id='datelindja' name='datelindja' onChange={handleInput}/>
                        {errors.datelindja && <span className='text-danger'>{errors.datelindja}</span>}

                        <input type="text" placeholder='Qyteti' id='qyteti' name='qyteti' onChange={handleInput}/>
                        {errors.qyteti && <span className='text-danger'>{errors.qyteti}</span>}

                        <input type="text" placeholder='Paga' id='paga' name='paga' onChange={handleInput}/>
                        {errors.paga && <span className='text-danger'>{errors.paga}</span>}

                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' name='numri_telefonit' onChange={handleInput}/>
                        {errors.numri_telefonit && <span className='text-danger'>{errors.numri_telefonit}</span>}

                        <button className='btn' type='submit'>Sign Up<Link to ='/LoginForm'></Link></button>
                    </form>
                </div>
            </div>
        </section>
    )
}