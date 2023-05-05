import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import {useState} from 'react';
import '../css/SignupForm.css';



export default function UpdateLibri() {
    const{Isbn}= useParams()
    // const [isbn,setIsbn]=useState(0)
    const [titulli,setTitulli]=useState("")
    const [Autori,setAutori]=useState("")
    const [vitiBotimit,setVitiBotimit]=useState(0)
    const[shtepiaBotimit,setShtepiaBotimit] = useState("")
    const [sasia,setSasia]=useState(0)
    const [pershkrimi,setPershkrimi]=useState("")
    const [url,setUrl]=useState("")
    const [zhanri,setZhanri]=useState("")
    const [rafti,setRafti]=useState(0)
    
    const navigate=useNavigate();
    function handleUpdate(event){
        event.preventDefault();
        axios.put('http://localhost:8081/libri/' + Isbn, { titulli, Autori, vitiBotimit, shtepiaBotimit, sasia, pershkrimi, url, zhanri, rafti})
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
                        {/* <input type="number"  id='isbn' onChange={e=>setIsbn(e.target.value)} /> */}
                        <input type="text"  id='titulli' onChange={e=>setTitulli(e.target.value)} />
                        <input type="text"id='Autori' onChange={e=>setAutori(e.target.value)}/>
                        <input type="date"  id='vitiBotimit' onChange={e=>setVitiBotimit(e.target.value)}/>
                        <input type="text" id='shtepiaBotimit' onChange={e=>setShtepiaBotimit(e.target.value)}/>
                        <input type="number"  id='sasia'  onChange={e=>setSasia(e.target.value)}/>
                        <input type="text"  id='pershkrimi' onChange={e=>setPershkrimi(e.target.value)} />
                        <input type="text"  id='url' onChange={e=>setUrl(e.target.value)} />
                        <input type="text"  id='zhanri' onChange={e=>setZhanri(e.target.value)} />
                        <input type="number"  id='rafti' onChange={e=>setRafti(e.target.value)} />

                        <button className='btn' type='submit'>Sign Up</button>
                    </form>
                </div>

            </div>
        </section>
    )
}