import React from 'react';
import Nav from './nav';
import Footer from '../js/footer';
import image from '../ImagesOfProject/foto1.avif';
import wishList from '../css/wishList.css';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

export default function WishL() {
    const [titulli, setTitulli] = useState("")
    const [autori, setAutori] = useState("")

    const navigate = useNavigate();
    
    function handleUpdate(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/wishList/' + Wish_ID, {titulli, autori })
            .then(res => {
                console.log(res);
                navigate('/');

            }).catch(err => console.log(err));

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
                    </center>
                </div>
                <div className="labels">
                    <form onSubmit={handleUpdate}>
                        <input type="text" className="form-control" placeholder='Titulli:' id='titulli' onChange={e => setTitulli(e.target.value)} />
                        <input type="text" className="form-control" placeholder='Autori:' id='autori' onChange={e => setAutori(e.target.value)} />

                        <br></br>
                        <button id="vazhdo" type='submit'>Shto Librin!</button>

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