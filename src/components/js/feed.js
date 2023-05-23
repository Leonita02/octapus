import Nav from './nav';
import SBar from './searchBar';
import MainF from './MainFeed';
import { Link } from 'react-router-dom';
function feed(){
  return <> <Nav></Nav>;
          <SBar></SBar>;
          <MainF></MainF>;
          </>
}
export default feed;