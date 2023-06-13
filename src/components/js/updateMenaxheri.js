import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import {useState} from 'react';
import '../css/SignupForm.css';
import { useCookies } from 'react-cookie';



export default function UpdateMenaxheri() {
    const { Personi_ID } = useParams();
    const [emri,setEmri]=useState("");
    const [mbiemri,setMbiemri]=useState("");
    const [email,setEmail]=useState("");
    const [datelindja,setDatelindja]=useState("");
    const[qyteti,setQyteti] = useState("");
    const [paga,setPaga]=useState(0);
    const [numri_telefonit,setNrTelefonit]=useState(0);
    const navigate=useNavigate();
    const [cookies] = useCookies(['userId', 'roleId']);
    const isAuthorized = (allowedRoles) => {
      const userRole = cookies.roleId;
      return allowedRoles.includes(userRole);
    };
  
    if (!isAuthorized([ '1'])) {
      return (
        <div>
          <h1>Unauthorized Access</h1>
          {/* Additional unauthorized access handling */}
        </div>
      );
    }

    if (!Personi_ID) {
        console.log('Personi_ID is undefined or empty');
        return null;
      }
      console.log('URL:', `http://localhost:8081/punetori/${Personi_ID}`);
     
  

    
    
   
    function handleUpdate(event){
        event.preventDefault();
        axios.put('http://localhost:8081/menaxheri/' + Personi_ID, {emri, mbiemri, email, datelindja, qyteti, paga, numri_telefonit})
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
                        <input type="text" placeholder='Emri' id='emri' onChange={e=>setEmri(e.target.value)} />
                        <input type="text" placeholder='Mbiemri' id='mbiemri' onChange={e=>setMbiemri(e.target.value)} />
                        <input type="text" placeholder='Email' id='email' onChange={e=>setEmail(e.target.value)}/>
                        <input type="text" placeholder='Datelindja' id='datelindja' onChange={e=>setDatelindja(e.target.value)}/>
                        <input type="text" placeholder='Qyteti' id='qyteti' onChange={e=>setQyteti(e.target.value)}/>
                        <input type="text" placeholder='Paga' id='paga'  onChange={e=>setPaga(e.target.value)}/>
                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' onChange={e=>setNrTelefonit(e.target.value)} />
                       

                        <button className='btn' type='submit' >Ndrysho</button>
                    </form>
                </div>

            </div>
        </section>
    )
}