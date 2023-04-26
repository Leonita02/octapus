import React from 'react';
import Nav from './nav';
import Footer from '../js/footer';
import image from '../ImagesOfProject/foto1.avif';
import wishList from '../css/wishList.css';
function wishL() {
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
                <div class="labels">
                    <form>
                        <label>Autori:
                            <input type="text" />
                        </label>
                        <label>Titulli:
                            <input type="text" />
                        </label>
                        <div>
                            {/* <button>Shto më shumë libra</button> */}
                            <br></br>
                            <button id="vazhdo">Shto Librin!</button>
                        </div>
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


export default wishL;
