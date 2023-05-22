// import '../css/wishCard.css';
import profile from '../ImagesOfProject/prodilePiic.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
function WishCard(){
  const [wishList, setWishList] = useState([])
  useEffect(() => {
      axios.get('http://localhost:8081/wishList')
          .then(res => setWishList(res.data))
          .catch(err => console.log(err));

  }
  )
  return (
    <div className="row">
      {wishList.map((data, i) => (
        <div className="col-md-4 col-lg-4 col-xl-4" key={i}>
          <div className="card comment-card w-100 m-3">
            <div className="comment-header p-3">
              <img src={profile} alt="User Avatar" className="avatar rounded-circle" style={{ width: "50px", height: "50px" }} />
              <h3 className="card-title">John Doe</h3>
              <span className="card-subtitle mb-2 text-muted">April 24, 2023</span>
            </div>
            <div className="comment-body p-3">
              <h4 className="card-title">{data.Autori}</h4>
              <h4 className="card-title">"{data.Titulli}"</h4>
            </div>
            <div className="comment-footer">
              <a href="#" className="btn m-2  border border-danger">Delete</a>
              <a href="#" className="btn m-2 border border-info">Edit</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
      }
  
  
  
  
  
  

export default WishCard;