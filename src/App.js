
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import {Routes} from 'react-router';
 //import Dashboard from './components/js/dashboard';
 import HomePage from "./components/js/HomePage";
 import Feed from './components/js/feed';
 import LoginForm from './components/js/LoginForm';
 import ProfilePage from './components/js/profilePage';
import BookPage from "./components/js/bookPage";
import WishList from './components/js/wishList';
//import Porosia from './components/js/porosia';
//import Pagesa from './components/js/pagesa';
//import AddBook from './components/js/addBook';
// import VForm from './components/js/VForm'
import SignupForm from './components/js/SignupForm';
function App() {
  return  <SignupForm></SignupForm>
//   <Router>
//   <Routes>
//     <Route path="feed" element={<Feed />}></Route>
//     <Route index element={<HomePage />} />
//     <Route path="logIn" element={<LoginForm/>}></Route>
//     <Route path="Feed" element={<Feed/>}></Route>
//     <Route path='profilePage' element = {<ProfilePage/>}></Route>
//     <Route path='wishList' element = {<WishList></WishList>}></Route>
//     <Route path='bookPage' element ={<BookPage></BookPage>}></Route>

      
     
   
//   </Routes>
// </Router>
 
}

export default App;