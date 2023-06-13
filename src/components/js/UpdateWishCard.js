import React from 'react';
import Nav from './nav';
import Footer from '../js/footer';
import image from '../ImagesOfProject/foto1.avif';
import wishList from '../css/wishList.css';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function WishL() {
    const{Wish_ID}=useParams()
    const [titulli, setTitulli] = useState("")
    const [autori, setAutori] = useState("")
    const [cookies] = useCookies(['userId', 'roleId']);

    const navigate = useNavigate();
    
    function handleUpdate(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/wishList/' + Wish_ID, {titulli, autori })
            .then(res => {
                console.log(res);
                navigate('/profilePage');

            }).catch(err => console.log(err));

    }
    const isAuthorized = (allowedRoles) => {
        const userRole = cookies.roleId;
        return allowedRoles.includes(userRole);
      };
    
      if (!isAuthorized(['4'])) {
        return (
          <div>
            <h1>Unauthorized Access</h1>
            {/* Additional unauthorized access handling */}
          </div>
        );
      }

    return (
        <>
            <div><Nav /></div>
            <br />
            <br />

            <div className='first'>
                <div id="wishBanner">
                    <center>
                        <h1>Lista juaj e deshirave:</h1>
                        <h2>Ndrysho</h2>
                    </center>
                </div>
                <div className="labels">
                    <form onSubmit={handleUpdate} id='form'>
                        <input type="text" className="form-control" placeholder='Titulli:' id='titulli' onChange={e => setTitulli(e.target.value)} />
                        <input type="text" className="form-control" placeholder='Autori:' id='autori' onChange={e => setAutori(e.target.value)} />

                        <br></br>
                        <button id="vazhdo" type='submit'>Ndrysho!</button>

                    </form>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div><Footer /></div>
        </>
    );
}


// export default WishL;