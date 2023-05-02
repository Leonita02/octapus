import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import {useState} from 'react';
import '../css/SignupForm.css';



export default function UpdatePerson() {
    const{Personi_ID}=useParams()
    const [emri,setEmri]=useState("")
    const [mbiemri,setMbiemri]=useState("")
    const [email,setEmail]=useState("")
    const [datelindja,setDatelindja]=useState("")
    const[qyteti,setQyteti] = useState("")
    const [paga,setPaga]=useState(0)
    const [nrTelefonit,setNrTelefonit]=useState(0)
    const [qendra,setQendra]=useState(0)
    
    const navigate=useNavigate();
    function handleUpdate(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + Personi_ID, {emri, mbiemri, email, datelindja, qyteti, paga, nrTelefonit, qendra})
        .then(res => {
            console.log(res);
            navigate('/');
            
        }).catch(err => console.log(err));

    }

    
   
    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-2'>
                    <h2> Update </h2>
                    
                    <form id='form' className='flex flex-col' onSubmit={handleUpdate}>
                        <input type="text" placeholder='Emri' id='emri' onChange={e=>setEmri(e.target.value)} />
                        <input type="text" placeholder='Mbiemri' id='mbiemri' onChange={e=>setMbiemri(e.target.value)} />
                        <input type="text" placeholder='Email' id='email' onChange={e=>setEmail(e.target.value)}/>
                        <input type="text" placeholder='Datelindja' id='datelindja' onChange={e=>setDatelindja(e.target.value)}/>
                        <input type="text" placeholder='Qyteti' id='qyteti' onChange={e=>setQyteti(e.target.value)}/>
                        <input type="text" placeholder='Paga' id='paga'  onChange={e=>setPaga(e.target.value)}/>
                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' onChange={e=>setNrTelefonit(e.target.value)} />
                        <input type="text" placeholder='Qendra' id='qendra' onChange={e=>setQendra(e.target.value)} />

                        <button className='btn' type='submit' >Update</button>
                    </form>
                </div>

            </div>
        </section>
    )
}