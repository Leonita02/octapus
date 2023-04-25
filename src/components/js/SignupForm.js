import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
export default function Form() {
    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-2'>
                    <h2> Sign Up </h2>
                    <span> Welcome to Octopus</span>
                    <form id='form' className='flex flex-col'>
                        <input type="text" placeholder='Emri' id='emri' />
                        <input type="text" placeholder='Mbiemri' id='mbiemri' />
                        <input type="text" placeholder='Email' id='email' />
                        <input type="text" placeholder='Datelindja' id='datelindja' />
                        <input type="text" placeholder='Paga' id='paga' />
                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' />
                        <input type="text" placeholder='Qendra' id='qendra' />

                        <button className='btn'>Sign Up</button>
                    </form>
                </div>

            </div>
        </section>
    )
}