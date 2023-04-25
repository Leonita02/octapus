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
            <hr />
            <div>
                <div id="wishBanner">
                    <h1>Lista juaj e deshirave:</h1>
                </div>
                <div class="labels">
                    <form>
                        <label>Emri:
                            <input type="text" />
                        </label>
                        <label>Mbiemri:
                            <input type="text" />
                        </label>
                        <label>Id:
                            <input type="text" />
                        </label>
                        <label>Libri:
                            <input type="text" />
                        </label>
                        <div>
                            <button>Shto më shumë libra</button>
                            <br></br>
                            <button id="vazhdo">Vazhdo</button>
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
