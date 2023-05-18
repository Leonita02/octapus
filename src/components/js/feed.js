import Nav from './nav';
import SBar from './searchBar';
import MainF from './MainFeed';
import { Link } from 'react-router-dom';
function feed(){
  return <> <Nav></Nav>;<br/><br/><br/>
           <button className='btn btn-primary'><Link to="/dashboard">Personi</Link></button> 
           <button className='btn btn-primary'><Link to="/LibriDashboard">Libri</Link></button> 
           <button className='btn btn-primary'><Link to="/WLdashboard">Wish ListD</Link></button> 
          <SBar></SBar>;
          <MainF></MainF>;
          </>
}
export default feed;