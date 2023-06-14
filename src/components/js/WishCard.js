// import '../css/wishCard.css';
import profile from '../ImagesOfProject/prodilePiic.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useCookies} from 'react-cookie';

function WishCard(){
  const [wishList, setWishList] = useState([])
  const [cookies] = useCookies(['userId', 'roleId']);

  // Access the user ID and role ID from cookies
  const userId = cookies.userId;
  useEffect(() => {
    // Make the GET request to fetch wishlist data based on userId
    axios.get(`http://localhost:8081/wishList?userId=${userId}`)
      .then(res => {
        setWishList(res.data);
      })
      .catch(err => console.log(err));
  }, [userId]);
  const handleDelete = async (Wish_ID) => {
    try {
      await axios.delete('http://localhost:8081/wishList/' + Wish_ID)
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="row">
      {wishList.map((data, i) => (
       
        <div className="col-md-4 col-lg-4 col-xl-4" key={i}>
          <div className="card comment-card w-100 m-3">
            <div className="comment-header p-3">
              <img src={profile} alt="User Avatar" className="avatar rounded-circle" style={{ width: "50px", height: "50px" }} />
              <br></br>
            
              <h4 className="card-title">@{data.Username}</h4>
              {/* <span className="card-subtitle mb-2 text-muted">April 24, 2023</span> */}
            </div>
            <div className="comment-body p-3">
              <h4 className="card-title">{data.Autori}</h4>
              <h4 className="card-title">{data.Titulli}</h4>
            </div>
            <div className="comment-footer">
            {/* <button className="btn m-2 btn-danger border border-danger" onClick={() => handleDelete(data.Wish_ID)}>Delete</button>
              <button className="btn m-2 border border-primary"><Link to={`/wishList/${data.Wish_ID}`} style={{ color: 'black', textDecoration: 'none' }}>Edit</Link></button>
     */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
      }
  
  
  
  
  
  

export default WishCard;