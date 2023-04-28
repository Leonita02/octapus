import React from 'react'
import bgimg from '../ImagesOfProject/img44.jpeg';
import '../css/LoginForm.css';
import {Link } from 'react-router-dom';
export default function Form() {
    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2> Log In</h2>
                    <span> Enjoy The Service</span>
                    <form id='form' className='flex flex-col'>
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Password' />

                        <button className='btn'><Link to='/feed'>Log In</Link></button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
            </div>
        </section>
    )
}
