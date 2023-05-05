import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import {useState} from 'react';
import '../css/addBook.css';
import { useEffect } from "react";



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
                <div className='col-2'>
                    <h2> Ndrysho! </h2>
                    
                    <form id='form' className='flex flex-col' onSubmit={handleUpdate}>
                        <input type="text" placeholder='Titulli:' id='titulli' onChange={e=>setTitulli(e.target.value)} />
                        <input type="text" placeholder='Autori:' id='Autori' onChange={e=>setAutori(e.target.value)}/>
                        <input type="date" placeholder='Viti i botimit:' id='vitiBotimit' onChange={e=>setVitiBotimit(e.target.value)}/>
                        <input type="text" placeholder='Shtepia e botimit:' id='shtepiaBotimit' onChange={e=>setShtepiaBotimit(e.target.value)}/>
                        <input type="number" placeholder='Sasia:'  id='sasia'  onChange={e=>setSasia(e.target.value)}/>
                        <input type="text" placeholder='pershkrimi' id='pershkrimi' onChange={e=>setPershkrimi(e.target.value)} />
                        <input type="text" placeholder='Url:' id='url' onChange={e=>setUrl(e.target.value)} />
                        <input type="text" placeholder='Zhanri:'  id='zhanri' onChange={e=>setZhanri(e.target.value)} />
                        <input type="number" placeholder='Rafti:' id='rafti' onChange={e=>setRafti(e.target.value)} />

                        <button className='btn' type='submit'>Ndrysho</button>
                    </form>
                </div>

            </div>
        </section>
    )
}