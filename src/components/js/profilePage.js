import '../css/profilePage.css';
//import foto from '../ImagesOfProject/fotoM.jpeg';
import fotoProfili from '../ImagesOfProject/prodilePiic.png';

import fotoFavs from '../ImagesOfProject/fotoFav.png';
import WishCard from './WishCard';
import addWishList from '../ImagesOfProject/addWishList.png';
import logout from '../ImagesOfProject/logout img.png';
import Nav from './nav';
import { useNavigate } from 'react-router';



function ProfilePage(){
    const navigate = useNavigate(); // funksioni per me te dergu me add-> wishLista 
    const navigateToWishList = () => {
        // 👇️ navigate to /contacts
        navigate('/wishList');
    }
    return (
        <>
        <div>
       <Nav></Nav>
       </div>
        
        <div className='userProfile'>
            <img src={fotoProfili} id='fotoProfili' alt='foto' ></img>
           
            <h1 id='userName'>John Doe</h1>
          
            <img src ={fotoFavs} id='fotoLogout' alt='foto'></img>
            <img src ={addWishList} id='fotoFavs' alt='foto' onClick={navigateToWishList} ></img>
            <img src ={logout} id='fotoWishL' alt='foto'></img>
            <hr id='line'/>
            
            </div>
           
           
        
        
        <div className='cards'>
        <WishCard></WishCard>
        <WishCard></WishCard>
        <WishCard></WishCard>
       
        

        </div>
        </>
        




    )
    





}
export default ProfilePage;