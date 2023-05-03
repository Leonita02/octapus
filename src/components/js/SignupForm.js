import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useState} from 'react';



export default function Form() {
    const [emri,setEmri]=useState("")
    const [mbiemri,setMbiemri]=useState("")
    const [email,setEmail]=useState("")
    const [datelindja,setDatelindja]=useState("")
    const[qyteti,setQyteti] = useState("")
    const [paga,setPaga]=useState(0)
    const [nrTelefonit,setNrTelefonit]=useState(0)
    const [qendra,setQendra]=useState(0)

    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8081/create",{emri,mbiemri,email,datelindja,qyteti,paga,nrTelefonit,qendra})
        .then(res =>{
            console.log(res);
            // navigate('/dashboard'); // ose ne feed qetu duhet me bo kushtin me kshyr rolin kur te regjistrojme
        }).catch(err => console.log(err));

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
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Emri' id='emri' onChange={e=>setEmri(e.target.value)} />
                        <input type="text" placeholder='Mbiemri' id='mbiemri' onChange={e=>setMbiemri(e.target.value)} />
                        <input type="text" placeholder='Email' id='email' onChange={e=>setEmail(e.target.value)}/>
                        <input type="text" placeholder='Datelindja' id='datelindja' onChange={e=>setDatelindja(e.target.value)}/>
                        <input type="text" placeholder='Qyteti' id='qyteti' onChange={e=>setQyteti(e.target.value)}/>
                        <input type="text" placeholder='Paga' id='paga'  onChange={e=>setPaga(e.target.value)}/>
                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' onChange={e=>setNrTelefonit(e.target.value)} />
                        <input type="text" placeholder='Qendra' id='qendra' onChange={e=>setQendra(e.target.value)} />

                        <button className='btn' type='submit'>Sign Up</button>
                    </form>
                </div>

            </div>
        </section>
    )
}