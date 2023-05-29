import '../css/profilePage.css';
//import foto from '../ImagesOfProject/fotoM.jpeg';
import fotoProfili from '../ImagesOfProject/prodilePiic.png';

import fotoFavs from '../ImagesOfProject/fotoFav.png';
import WishCard from './WishCard';
import addWishList from '../ImagesOfProject/addWishList.png';
import logout from '../ImagesOfProject/logout img.png';
import Nav from './nav';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';


function ProfilePage(){
    const navigate = useNavigate(); // funksioni per me te dergu me add-> wishLista 
    function navigateToWishList() {
        navigate('/wishList');
    }
    function navigateToPagesa(){
        navigate('/pagesa');
        console.log("Checkout")
    }

    const handleLogout = () => {
      axios
       .get('http://localhost:8081/logout')
        .then((res) => {
          if (res.status === 200) {
            navigate('/');
          } else {
            alert('Error');
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Error');
        });
    }; 
    return (
        <>
        <div>
       <Nav></Nav>
       </div>
       <br></br>
       <br></br>
       <button className="btn btn-primary" onClick={navigateToPagesa}>Pagesa</button>
        <div className='userProfile'>
            <img src={fotoProfili} id='fotoProfili' alt='foto' ></img>
           
            <h1 id='userName'>John Doe</h1>
          
            <img src ={fotoFavs} id='fotoLogout' alt='foto'></img>
            <img src ={addWishList} id='fotoFavs' alt='foto' onClick={navigateToWishList} ></img>
            <img src ={logout} id='fotoWishL' alt='foto' onClick={handleLogout}></img>
           
            
            </div>
           
           
        
        
        <div className='cards'>
        <WishCard></WishCard>
        </div>
        </>
        




    )
    





}
export default ProfilePage;