
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
import Pagesa from './components/js/pagesa';
import AddBook from './components/js/addBook';
// import VForm from './components/js/VForm'
import SignupForm from './components/js/SignupForm';
import UpdatePunetori from './components/js/updatePunetori';
import LibriDashboard from './components/js/LibriDashboard';
import UpdateLibri from './components/js/updateLibri';
import WLdashboard from './components/js/WLdashboard';
import ClientSignUpForm from './components/js/ClientSignUp';
import PunetoretDashB from './components/js/punetoretDshB';
import MenaxheriDashB from './components/js/menaxheriDshB';
import UpdateMenaxheri from './components/js/updateMenaxheri';


function App() {
  return ( 
   <Router>
   <Routes>
     <Route path="feed" element={<Feed />}></Route>
     <Route index element={<Dashboard/>} />
     <Route path="logIn" element={<LoginForm/>}></Route>
     <Route path="feed" element={<Feed/>}></Route>
    <Route path='profilePage' element = {<ProfilePage/>}></Route>
    <Route path='wishList' element = {<WishList></WishList>}></Route>
    <Route path='pagesa' element = {<Pagesa></Pagesa>}></Route>
    <Route path='bookPage' element ={<BookPage></BookPage>}></Route>
    <Route path = 'dashboard' element ={<Dashboard></Dashboard>}></Route>
    <Route path='/punetori/:Personi_ID' element={<UpdatePunetori/>} />
    <Route path='addBook' element={<AddBook/>} />
    <Route path='SignupForm' element={<SignupForm/>}/>
    <Route path='ClientSignUp' element={<ClientSignUpForm/>}/>
    <Route path='/libri/:Isbn' element={<UpdateLibri/>} />
    <Route path='WLdashboard' element={<WLdashboard/>} />
    <Route path ='ClientSignUpForm' element={<ClientSignUpForm></ClientSignUpForm>}></Route>
    <Route path='LibriDashboard' element={<LibriDashboard></LibriDashboard>}></Route>
    <Route path='/menaxheri/:Personi_ID' element={<UpdateMenaxheri />} />
    <Route path ='/punetoretDshB' element={<PunetoretDashB></PunetoretDashB>}></Route>
    <Route path ='/menaxheriDshB' element={<MenaxheriDashB></MenaxheriDashB>}></Route>

    
     
   
 </Routes>
 </Router>
  )
 
}

export default App;