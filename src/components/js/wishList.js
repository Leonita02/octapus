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

    function handleSubmit(event) {
        // event.preventDefault();
        // axios.post("http://localhost:8081/createWishCard", { Titulli, autori})
        //     .then(res => {
        //         console.log(res);
        //         // navigate('/'); // ose ne feed qetu duhet me bo kushtin me kshyr rolin kur te regjistrojme
        //     }).catch(err => console.log(err));

        event.preventDefault();
        axios.post("http://localhost:8081/createWishCard", { titulli, autori})
            .then(res => {
                console.log(res);
                 navigate('/'); // ose ne feed qetu duhet me bo kushtin me kshyr rolin kur te regjistrojme
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
                    <form onSubmit = { handleSubmit }>
                        <input type="text" id='titulli' onChange={e => setTitulli(e.target.value)} />
                        <input type="text" id='autori' onChange={e => setAutori(e.target.value)} />

                        {/* <div> */}
                            {/* <button>Shto më shumë libra</button> */}
                            <br></br>
                            <button id="vazhdo" type='submit'>Shto Librin!</button>
                        {/* </div> */}
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
