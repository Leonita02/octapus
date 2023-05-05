import '../css/addBook.css';
// import Nav from './nav';
import React from 'react';
import axios from 'axios';

import {useState} from 'react';
import { useNavigate } from 'react-router';

function AddBook(){

  const [isbn,setIsbn]=useState("")
    const [titulli,setTitulli]=useState("")
    const [Autori,setAutori]=useState("")
    const [vitiBotimit,setVitiBotimit]=useState(0)
    const[shtepiaBotimit,setShtepiaBotimit] = useState("")
    const [sasia,setSasia]=useState(0)
    const [pershkrimi,setPershkrimi]=useState("")
    const [url,setUrl]=useState("")
    const [zhanri,setZhanri]=useState("")
    const [rafti,setRafti]=useState(0)
    const navigate=useNavigate()

    function handleSubmit(event){
      event.preventDefault();
      axios.post("http://localhost:8081/libri",{isbn,titulli,Autori,vitiBotimit,shtepiaBotimit,sasia,pershkrimi,url,zhanri,rafti})
      .then(res =>{
          console.log(res);
          navigate('/'); // ose ne feed qetu duhet me bo kushtin me kshyr rolin kur te regjistrojme
      }).catch(err => console.log(err));

  }
 return(
    <>
    
    <section>
            <div className='register'>
               
                <div className='col-2'>
                    <h2 id='titullii'> +Libër! </h2>
                    <hr></hr>
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="number" placeholder='Isbn:' id='isbn' onChange={e=>setIsbn(e.target.value)} />
                        <input type="text" placeholder='Titulli:' id='titulli' onChange={e=>setTitulli(e.target.value)} />
                        <input type="text" placeholder='Autori:' id='Autori' onChange={e=>setAutori(e.target.value)}/>
                        <input type="date" placeholder='Viti i botimit:' id='vitiBotimit' onChange={e=>setVitiBotimit(e.target.value)}/>
                        <input type="text" placeholder='Shtepia e botimit:' id='shtepiaBotimit' onChange={e=>setShtepiaBotimit(e.target.value)}/>
                        <input type="number" placeholder='Sasia:' id='sasia'  onChange={e=>setSasia(e.target.value)}/>
                        <input type="text" placeholder='Pershkrimi:' id='pershkrimi' onChange={e=>setPershkrimi(e.target.value)} />
                        <input type="text" placeholder='Url:' id='url' onChange={e=>setUrl(e.target.value)} />
                        <input type="text" placeholder='Zhanri:' id='zhanri' onChange={e=>setZhanri(e.target.value)} />
                        <input type="number" placeholder='Rafti:' id='rafti' onChange={e=>setRafti(e.target.value)} />

                        <button id='btn' type='submit'>Shto</button>
                    </form>
                </div>

            </div>
        </section>

    
    </>





 )


}
export default AddBook;