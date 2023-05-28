import { Link } from "react-router-dom";
import '../css/Kategorite.css'
export default function Kategorite(){

    return(
        <>
   <div className="mt-5 kategorite">
  <ul className=" d-flex" style={{ listStyleType: 'none', justifyContent:'center', columnGap:'20px'}}>
    <li ><Link to={`/Romance`} style={{textDecoration: 'none', color:'grey'}} >Romance</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}} className="nav-link">Drama</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}}className="nav-link">Aksion</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}}>Fantazi</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}}>Krim</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}}>Bestseller</Link></li>
    <li><Link  style={{textDecoration: 'none', color:'grey'}}>Klasikë</Link></li>
  </ul>
</div>
      </>
    );
}