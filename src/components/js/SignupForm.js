import React from 'react'
import bgimg from '../ImagesOfProject/img33.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useState} from 'react';


export default function SignupForm() {

    const navigate = useNavigate();
    const [values,setValues] = useState({
        emri:'',
        mbiemri:'',
        email:'',
        datelindja:'',
        qyteti:'',
        paga:0,
       nr_tel :0 ,
        username:'',
        password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmitP =(event) => {
        event.preventDefault();
        // setErrors(Validation(values));
        // if(errors.emri === "" && errors.mbiemri ==="" && errors.email ==="" && errors.ditelindja === ""
        //     && errors.qyteti ==="" && errors.nr_tel ==="" && errors.username === "" && errors.password ===""){

                axios.post('http://localhost:8081/punetori/' ,values)
                .then(res => {
                    // navigate('/logIn');
                })
                .catch(err => console.log(err));

            }
            const handleSubmitM =(event) => {
                event.preventDefault();
                // setErrors(Validation(values));
                // if(errors.emri === "" && errors.mbiemri ==="" && errors.email ==="" && errors.ditelindja === ""
                //     && errors.qyteti ==="" && errors.nr_tel ==="" && errors.username === "" && errors.password ===""){
        
                        axios.post('http://localhost:8081/menaxheri/' ,values)
                        .then(res => {
                             navigate('/menaxheriDshB');
                        })
                        .catch(err => console.log(err));
        
                    }
 

    return (
        <>
            <div className='register'>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
                <div className='col-1'>
                    
                    <h2> Regjistro <b>STAFIN</b> </h2>
                    <span> Mirëse vini në Octopus</span>
                    <form action=""  id='form' className='forma' >
                        
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

                        <input type="text" placeholder='Paga' id='paga' name='paga' onChange={handleInput}/>
                        {errors.paga && <span className='text-danger'>{errors.paga}</span>}

                        <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' name='nr_tel' onChange={handleInput}/>
                        {errors.nr_tel && <span className='text-danger'>{errors.nr_tel}</span>}

                        
                        <input type="text" placeholder='Username' id='username' name='username'  onChange={handleInput}/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}

                        <input type="text" placeholder='Password' id='password' name='password' onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <button className='btn' type='submit' onClick={handleSubmitP}>Regjistro si Punetorë</button>
                        <button className='btn' type='submit' onClick={handleSubmitM}>Regjistro si Menaxherë</button>
                        
                    </form>
                    
                </div>
            </div>
            
        </>
    )
}

// export default function Form() {
//     const [emri,setEmri]=useState("")
//     const [mbiemri,setMbiemri]=useState("")
//     const [email,setEmail]=useState("")
//     const [datelindja,setDatelindja]=useState("")
//     const[qyteti,setQyteti] = useState("")
//     const [paga,setPaga]=useState(0)
//     const [nrTelefonit,setNrTelefonit]=useState(0)
//     const [qendra,setQendra]=useState(0)

//     const navigate=useNavigate();

//     function handleSubmit(event){
//         event.preventDefault();
//         axios.post("http://localhost:8081/personi",{emri,mbiemri,email,datelindja,qyteti,paga,nrTelefonit,qendra})
//         .then(res =>{
//             console.log(res);
//              navigate('/'); // ose ne feed qetu duhet me bo kushtin me kshyr rolin kur te regjistrojme
//         }).catch(err => console.log(err));

//     }
//     return (
//         <section>
//             <div className='register'>
//                 <div className='col-2'>
//                     <h2 id='titulli'> Register form </h2>
//                     <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
//                         <input type="text" placeholder='Emri' id='emri' onChange={e=>setEmri(e.target.value)} />
//                         <input type="text" placeholder='Mbiemri' id='mbiemri' onChange={e=>setMbiemri(e.target.value)} />
//                         <input type="text" placeholder='Email' id='email' onChange={e=>setEmail(e.target.value)}/>
//                         <input type="text" placeholder='Datelindja' id='datelindja' onChange={e=>setDatelindja(e.target.value)}/>
//                         <input type="text" placeholder='Qyteti' id='qyteti' onChange={e=>setQyteti(e.target.value)}/>
//                         <input type="text" placeholder='Paga' id='paga'  onChange={e=>setPaga(e.target.value)}/>
//                         <input type="text" placeholder='Numri Telefonit' id='numri_telefonit' onChange={e=>setNrTelefonit(e.target.value)} />
//                         <input type="text" placeholder='Qendra' id='qendra' onChange={e=>setQendra(e.target.value)} />

//                         <button className='btn' type='submit'>Sign Up</button>
//                     </form>
//                 </div>

//             </div>
//         </section>
//     )
// }