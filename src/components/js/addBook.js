import '../css/addBook.css';
// import Nav from './nav';
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
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
    const [cookies] = useCookies(['userId', 'roleId']);
    const isAuthorized = (allowedRoles) => {
      const userRole = cookies.roleId;
      return allowedRoles.includes(userRole);
    };
  
    if (!isAuthorized([ '3'])) {
      return (
        <div>
          <h1>Unauthorized Access</h1>
          {/* Additional unauthorized access handling */}
        </div>
      );
    }
  

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
           
            <div className="register">
                <div className="row  ">
                    <center>
                    <h2>Shto Libër!</h2>
                    </center>
                    <hr />
            <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                <input type="number" className="form-control" placeholder="Isbn:" id="isbn" onChange={e => setIsbn(e.target.value)} />
                <input type="text" className="form-control" placeholder="Titulli:" id="titulli" onChange={e => setTitulli(e.target.value)} />
                <input type="text" className="form-control" placeholder="Autori:" id="Autori" onChange={e => setAutori(e.target.value)} />
                <input type="date" className="form-control" placeholder="Viti i botimit:" id="vitiBotimit" onChange={e => setVitiBotimit(e.target.value)} />
                <input type="text" className="form-control" placeholder="Shtepia e botimit:" id="shtepiaBotimit" onChange={e => setShtepiaBotimit(e.target.value)} />
                <input type="number" className="form-control" placeholder="Sasia:" id="sasia" onChange={e => setSasia(e.target.value)} />
                <input type="text" className="form-control" placeholder="Pershkrimi:" id="pershkrimi" onChange={e => setPershkrimi(e.target.value)} />
                <input type="text" className="form-control" placeholder="Url:" id="url" onChange={e => setUrl(e.target.value)} />
                <input type="text" className="form-control" placeholder="Zhanri:" id="zhanri" onChange={e => setZhanri(e.target.value)} />
                <input type="number" className="form-control" placeholder="Rafti:" id="rafti" onChange={e => setRafti(e.target.value)} />

                <button id="btn" type="submit" className="btn">Shto</button>
            </form>
        </div>
        </div>
        </section>

    
    </>





 )


}
export default AddBook;