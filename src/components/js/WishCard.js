import '../css/wishCard.css';
import profile from '../ImagesOfProject/prodilePiic.png';
function wishCard(){
   return <> <div className="comment-card">
  <div className="comment-header">
    <img src={profile} alt="User Avatar"/>
    <h3>John Doe</h3>
    <span>April 24, 2023</span>
  </div>
  <div className="comment-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
  </div>
  <div className="comment-footer">
    <a href="#">Delete</a>
    <a href="#">Edit</a>
  </div>
</div></>
}

export default wishCard;