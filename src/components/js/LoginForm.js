import React from 'react'
import bgimg from '../ImagesOfProject/img44.jpeg';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
// import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

// export default function Login() {

//     const navigate = useNavigate();

//     const [values, setValues] = useState({
//         Username: '',
//         Password: ''
//     })
//     const [errors, setErrors] = useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
//     }


//     const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('http://localhost:8081/login', values, {
//         withCredentials: true,
//       })
//       .then(res => {
//         if (res.data) {
//           const { username, roleId } = res.data; // Extract the roleId from the response
          
//           // Redirect based on the role
//           if (roleId === 1) {
//             navigate('/dashboard');
//           } else if (roleId === 2) {
//             navigate('/menaxheriDshB');
//           } else if (roleId === 3) {
//             navigate('/punetoretDshB');
//           } else if (roleId === 4) {
//             navigate('/feed');
//           }
         
//         } else {
//           alert('No record');
//         }
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//     };
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Username: '',
    Password: '',
  });
  const [errors, setErrors] = useState({});
  const [, setCookies] = useCookies(['username', 'roleId', 'accessToken']);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8081/login', values, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          const { username, roleId, accessToken } = res.data; // Extract the necessary data from the response

          // Store the necessary information in cookies
          setCookies('username', username);
          setCookies('roleId', roleId);
          setCookies('accessToken', accessToken);

          // Redirect to the authorized route based on the role
          if (roleId === 1) {
            navigate('/dashboard');
          } else if (roleId === 2) {
            navigate('/menaxheriDshB');
          } else if (roleId === 3) {
            navigate('/punetoretDshB');
          } else if (roleId === 4) {
            navigate('/feed');
          }
        } else {
          alert('No record');
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };


    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2> Log In</h2>
                    <span> Enjoy The Service</span>
                    <form action="" onSubmit={handleSubmit} id='form' className='flex flex-col'>
                        <input type="text" placeholder='Username' onChange={handleInput} name='username' />
                        {errors.username && <span className='text-danger'>{errors.username}</span>}

                        <input type="text" placeholder='Password' onChange={handleInput} name='password' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <button type='submit' className='btnn w-100'>Kyqu</button>
                        <button className='btnn btn-default border w-100 rounded-0 text-decoration-none '><Link to='/ClientSignUpForm'>Regjistrohu</Link></button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src={bgimg} alt="" />
                </div>
            </div>
        </section>
    )

}
 // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if (errors.username === "" && errors.password === "") {
    //         axios.post('http://localhost:8081/login', values)
    //             .then(res => {
    //                 if (res.data === "Success") {
    //                     // if(data.role===4){
    //                     //     navigate('/feed');
    //                     // }
                        
    //                 }
    //                 else {
    //                     alert("Nuk ekziston asnjë regjistrim");
    //                 }

    //             })
    //             .catch(err => console.log(err));

    //     }
    // }
    // ---- LOCAL STORAGE
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // setErrors(Validation(values));
    
    //     if (!errors.username && !errors.password) {
    //       axios
    //         .post('http://localhost:8081/login', values)
    //         .then((res) => {
    //           const { role, token } = res.data;
    
    //           localStorage.setItem('token', token);
    
    //           if (role === 4) {
    //             navigate('/feed');
    //           } else if(role=== 3){
    //             navigate('/PunetoretDshB');
    //           }else if(role===2){
    //             navigate('/MenaxheriDshB');
    //           }else if(role===1){
    //             navigate('/LibriDashboard');
    //           }

              
    //           else {
    //             alert('Nuk ekziston asnjë regjistrim');
    //           }
    //         })
    //         .catch((err) => console.log(err));
    //     }
    //   };
// qetu nese dojn me bo me cookie dmth jo me localStorage 

// const navigate = useNavigate();

// const handleSubmit = (event) => {
//   event.preventDefault();

//   axios
//     .post('http://localhost:8081/login', values)
//     .then((res) => {
//       const { role } = res.data;


//       if (role === 4) {
//         navigate('/feed');
//       } else if (role === 3) {
//         navigate('/punetoretDshB');
//       } else if (role === 2) {
//         navigate('/menaxheriDshB');
//       } else if (role === 1) {
//         navigate('/LibriDashboard');
//       } else {
//         alert('Nuk ekziston asnjë regjistrim');
//       }
//     })
//     .catch((err) => console.log(err));
// }; 