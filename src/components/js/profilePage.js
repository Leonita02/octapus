import '../css/profilePage.css';
import foto from '../ImagesOfProject/fotoM.jpeg';
import fotoProfili from '../ImagesOfProject/prodilePiic.png';
import fotoFeed from '../ImagesOfProject/feedImg.png';
import fotoFavs from '../ImagesOfProject/fotoFav.png';
import Card from './cards';
import addWishList from '../ImagesOfProject/addWishList.png';
import logout from '../ImagesOfProject/logout img.png';



function profilePage(){
    return (
        <>
        <div className='image'>
           <img src={foto} id='foto' alt='foto' ></img>
           
        </div>
        
        <div className='userProfile'>
            <img src={fotoProfili} id='fotoProfili' alt='foto'></img>
           
            <h2 id='userName'>John Doe</h2>
            <div className='comp'>
            <img src ={fotoFeed} id='fotoFeed' alt='foto'></img>
            <img src ={fotoFavs} id='fotoFavs' alt='foto' ></img>
            <img src ={addWishList} id='fotoWishL' alt='foto'></img>
            </div>
            </div>
            <hr id='line'></hr>
            <div className="Logout">
            <img src ={logout} id='fotoLogout' alt='foto' ></img>
            </div>
        
        
        <div className='cards'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        </>
        




    )
    





}
export default profilePage;