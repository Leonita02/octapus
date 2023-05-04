
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import {Routes} from 'react-router';
 import Dashboard from './components/js/dashboard';
 import HomePage from "./components/js/HomePage";
 import Feed from './components/js/feed';
 import LoginForm from './components/js/LoginForm';
 import ProfilePage from './components/js/profilePage';
import BookPage from "./components/js/bookPage";
import WishList from './components/js/wishList';
//import Porosia from './components/js/porosia';
//import Pagesa from './components/js/pagesa';
import AddBook from './components/js/addBook';
// import VForm from './components/js/VForm'
import SignupForm from './components/js/SignupForm';
import UpdatePerson from './components/js/updatePerson';
import Ldashboard from './components/js/LibriDashboard';
import UpdateLibri from './components/js/updateLibri';
import WLdashboard from './components/js/WLdashboard';

function App() {
  return ( 
   <Router>
   <Routes>
     <Route path="feed" element={<Feed />}></Route>
     <Route index element={<WLdashboard/>} />
     <Route path="logIn" element={<LoginForm/>}></Route>
     <Route path="feed" element={<Feed/>}></Route>
    <Route path='profilePage' element = {<ProfilePage/>}></Route>
    <Route path='wishList' element = {<WishList></WishList>}></Route>
    <Route path='bookPage' element ={<BookPage></BookPage>}></Route>
    <Route path = 'dashboard' element ={<Dashboard></Dashboard>}></Route>
    <Route path='/update/:Personi_ID' element={<UpdatePerson />} />
    <Route path='addBook' element={<AddBook/>} />
    <Route path='SignupForm' element={<SignupForm/>}/>
    <Route path='/updateLibri/:Isbn' element={<UpdateLibri/>} />
    <Route path='WLdashboard' element={<WLdashboard/>} />
    
     
   
 </Routes>
 </Router>
  )
 
}

export default App;