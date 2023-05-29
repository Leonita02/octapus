
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, useNavigate} from 'react-router';
import {Routes} from 'react-router';
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
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
import UpdateWishCard from './components/js/UpdateWishCard';
import WLdashboard from './components/js/WLdashboard';
import ClientSignUpForm from './components/js/ClientSignUp';
import PunetoretDashB from './components/js/punetoretDshB';
import MenaxheriDashB from './components/js/menaxheriDshB';
import UpdateMenaxheri from './components/js/updateMenaxheri';
import Romance from './components/js/Romance';
function App() {
  return ( 
    function App() {
      const [roleId, setRoleId] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        axios
          .get('http://localhost:8081/login', {
            withCredentials: true,
          })
          .then(res => {
            const { roleId } = res.data;
            setRoleId(roleId);
            setLoading(false); // Set loading to false once role is obtained
          })
          .catch(err => {
            console.log(err);
            setLoading(false); // Set loading to false on error as well
          });
      }, []);
    
      if (loading) {
        // Show a loading spinner or placeholder component
        return <div>Loading...</div>;
      }
    
      const authorizedRoutes = [
            // General pages accessible to all users
            { path: '/', element: <HomePage /> },
            { path: '/feed', element: <Feed /> },
            { path: '/logIn', element: <LoginForm /> },
            { path: '/signup', element: <SignupForm /> },
            { path: '/wishList/:Wish_ID', element: <UpdateWishCard /> },
            { path: '/ClientSignUpForm', element: <ClientSignUpForm /> },
            { path: '/wishList', element: <WishList /> },
            { path: '/Romance', element: <Romance /> },
            { path: 'profilePage', element: <ProfilePage /> },
            // Authorized pages for specific roles
            { path: '/WLdashboard', element: <WLdashboard />, allowedRoles: ['1'] },
            { path: '/punetoretDshB', element: <PunetoretDashB />, allowedRoles: ['1', '3'] },
            { path: '/LibriDashboard', element: <LibriDashboard />, allowedRoles: ['1', '2'] },
            { path: '/bookPage/:id', element: <BookPage /> ,allowedRoles: ['1','2','3','4']}
          ];
        
    
      const handleUnauthorizedAccess = () => {
        return (
          <div>
            <h3>Unauthorized Access</h3>
            <p>You don't have permission to access this page.</p>
            <p>Please log in to access other pages.</p>
          </div>
        );
      };
    
      return (
        <Router>
          <Routes>
            {authorizedRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  !roleId && route.path !== '/' && route.path !=='/logIn'  && route.path !== '/signup'? (
                    handleUnauthorizedAccess()
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Routes>
        </Router>
      );
    }
//   )
 
// }
