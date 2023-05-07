import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useState} from 'react';
// import Validation from './SignUpValidation';
import {Link} from 'react-router-dom';
import '../css/clientSignup.css'


export default function ClientSignUpForm() {

    const navigate = useNavigate();
    const [values,setValues] = useState({
        emri:'',
        mbiemri:'',
        email:'',
        datelindja:'',
        qyteti:'',
       nr_tel :0 ,
        username:'',
        password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        // setErrors(Validation(values));
        // if(errors.emri === "" && errors.mbiemri ==="" && errors.email ==="" && errors.ditelindja === ""
        //     && errors.qyteti ==="" && errors.nr_tel ==="" && errors.username === "" && errors.password ===""){

                axios.post('http://localhost:8081/clientRepo/' ,values)
                .then(res => {
                    navigate('/logIn');
                })
                .catch(err => console.log(err));

            }
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(values); // add this line to log the values object
    //     axios.post('http://localhost:8081/clientRepo/', values)
    //       .then((res) => {
    //         navigate('/logIn');
    //       })
    //       .catch((err) => console.log(err));
    //   };


    return (
        <>
            <div className='register'>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-1'>
                    
                    <h2> Regjistrohu </h2>
                    <span> Mirëse vini në Octopus</span>
                    <form action="" onSubmit={handleSubmit}  id='form' className='forma' >
                        
                        <input type="text" placeholder='Emri' id='emri' name='emri' onChange={handleInput} />
                        {errors.emri && <span className='text-danger'>{errors.emri}</span>}

                        <input type="text" placeholder='Mbiemri' id='mbiemri' name='mbiemri' onChange={handleInput}/>
                        {errors.mbiemri && <span className='text-danger'>{errors.mbiemri}</span>}

                        <input type="text" placeholder='Email' id='email' name='email' onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}


                        <input type="text" placeholder='Datelindja' id='datelindja' name='datelindja' onChange={handleInput}/>
                        {errors.datelindja && <span className='text-danger'>{errors.datelindja}</span>}

                        <input type="text" placeholder='Qyteti' id='qyteti' name='qyteti' onChange={handleInput}/>
                        {errors.qyteti && <span className='text-danger'>{errors.qyteti}</span>}

                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' name='nr_tel' onChange={handleInput}/>
                        {errors.nr_tel && <span className='text-danger'>{errors.nr_tel}</span>}

                        
                        <input type="text" placeholder='Username' id='username' name='username'  onChange={handleInput}/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}

                        <input type="password" placeholder='Password' id='password' name='password' onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <button className='btn' type='submit'>Regjistrohu<Link to ='/LoginForm'></Link></button>
                        
                    </form>
                    
                </div>
            </div>
            
        </>
    )
}