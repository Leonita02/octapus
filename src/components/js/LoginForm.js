import React from 'react'
import bgimg from '../ImagesOfProject/img44.jpeg';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [, setCookies] = useCookies(['username', 'roleId', 'accessToken']);

  const handleInput = (event) => {
   const {name,value} = event.target;
   let error = null;

   switch(name){
    case 'username':
      if(!value.trim()){
        error = 'Fusha nuk duhet te jete e zbrazet!';
      }
      break;
    case 'password':
      if (!value.trim()) {
        error = 'Fusha nuk duhet te jete e zbrazet!';
    }
    break;
    default:
      break;
   }

   setValues((prev) => ({ ...prev, [name]: value }));
   setErrors((prev) => ({ ...prev, [name]: error }));


  };

  const [cookies, setCookie] = useCookies(['accessToken']);

  const handleSubmit = (event) => {
    event.preventDefault();

   
 
    if (values.username === '' || values.password === '') {
      alert('Ju lutem plotësoni fushat!');
      return;
  }

   // Checking if there are any errors
   const hasErrors = Object.values(errors).some((error) => error !== null);

   if (hasErrors) {
    console.log('Form contains errors:', errors);
    return;
}

    axios
      .post('http://localhost:8081/login', values, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          const { username, roleId, accessToken } = res.data; // Extract the necessary data from the response

          // Store the necessary information in cookies
          setCookie('accessToken', accessToken, { path: '/' });
          setCookie('userId', res.data.userId, { path: '/' });
          setCookie('roleId', roleId, { path: '/' });
          setCookies('username', username);

          // Redirect to the authorized route based on the role
          if (roleId === 1) {
            navigate('/sideBar');
          } else if (roleId === 2) {
            navigate('/sideBar');
          } else if (roleId === 3) {
            navigate('/sideBar');
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

  // Rest of your component code


    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2> Log In</h2>
                    <span> Enjoy The Service</span>
                    <form action="" onSubmit={handleSubmit} id='form' className='flex flex-col'>
                        <input 
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                         placeholder='Username'
                          onChange={handleInput} 
                          name='username'
                          id = 'username'
                          required />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}

                        <input
                         type="password" 
                         className={`form-control ${errors.changePassword ? 'is-invalid' : ''}`}
                        id ='password'
                         placeholder='Password'
                          onChange={handleInput}
                           name='password'
                           value ={values.password}
                           required 
                           />
                        {errors.changePassword && <div className="invalid-feedback">{errors.changePassword}</div>}

                        <button type='submit' className='btnn w-100'>Kyqu</button>
                        <button className='btnn btn-default border w-100 rounded-0 text-decoration-none '><Link to='/ClientSignup'>Regjistrohu</Link></button>
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