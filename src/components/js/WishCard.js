import '../css/wishCard.css';
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
   return <>
   {wishList.map((data, i) => {
    return (<div key={i} className="comment-card"> 
  <div className="comment-header">
    <img src={profile} alt="User Avatar"/>
    <h3>John Doe</h3>
    <span>April 24, 2023</span>
  </div>
  <div className="comment-body">
    <h4>{data.Autori}</h4>
    <h4>{data.Titulli}</h4>
  </div>
  <div className="comment-footer">
    <a href="#">Delete</a>
    <a href="#">Edit</a>
  </div>
</div>)
  })
  }</>
}

export default WishCard;