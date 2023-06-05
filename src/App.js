
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
import LexuesiDashB from './components/js/lexuesitDshB';
import SideBar from './components/js/SideBar';

const authorizedRoutes = [
  // General pages accessible to all users
  { path: '/', element: <HomePage /> },
  { path: '/feed', element: <Feed /> },
  { path: '/logIn', element: <LoginForm /> },
  { path: '/signup', element: <SignupForm /> },
  { path: '/wishList/:Wish_ID', element: <UpdateWishCard /> },
  { path: '/ClientSignUpForm', element: <ClientSignUpForm /> },
  { path: '/wishList', element: <WishList /> },
  { path: '/lexuesitDshB', element: <LexuesiDashB /> },
  { path: '/pagesa', element: <Pagesa/> },


  { path: '/profilePage', element: <ProfilePage /> },
  { path: '/LibriDashboard', element: <LibriDashboard />},
  { path: '/menaxheri', element: <MenaxheriDashB />},
  { path: '/Sidebar', element: <SideBar />},
  // Authorized pages for specific roles
  { path: '/WLdashboard', element: <WLdashboard />, allowedRoles: ['1'] },
  { path: '/punetoretDshB', element: <PunetoretDashB />, allowedRoles: ['1', '3'] },
  { path: '/LibriDashboard', element: <LibriDashboard />, allowedRoles: ['1', '2'] },
  { path: '/bookPage/:id', element: <BookPage /> ,allowedRoles: ['1','2','3','4']}
];


const handleUnauthorizedAccess = () => {
  return (
    <Navigate to="/" />
  );
};
function App() {
  return (
    <Router>
      <Routes>
        {authorizedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<AuthorizationHandler element={route.element} allowedRoles={route.allowedRoles} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

function AuthorizationHandler({ element, allowedRoles }) {
  const [roleId, setRoleId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:8081/login', { withCredentials: true });
        const { roleId } = response.data;

        // Store the user's role in state
        setRoleId(roleId);
      } catch (error) {
        console.log(error);
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    // Check if user is logged in before making the GET request
    if (document.cookie.includes('accessToken')) {
      checkAuthentication();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Perform authorization check when roleId or allowedRoles change
    if (roleId !== null) {
      const isAuthorized = allowedRoles ? allowedRoles.includes(roleId) : true;
      console.log('isAuthorized:', isAuthorized);

      if (!isAuthorized) {
        handleUnauthorizedAccess();
      }
    }
  }, [roleId, allowedRoles]);

  if (isLoading) {
    // Show a loading indicator or component while checking authentication
    return <div>Loading...</div>;
  }

  return element;
}

export default App;
// import './App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
// import {Route, useNavigate} from 'react-router';
// import {Routes} from 'react-router';
// import {Navigate} from 'react-router-dom';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
//  import Dashboard from './components/js/dashboard';
//  import HomePage from "./components/js/HomePage";
//  import Feed from './components/js/feed';
//  import LoginForm from './components/js/LoginForm';
//  import ProfilePage from './components/js/profilePage';
// import BookPage from "./components/js/bookPage";
// import WishList from './components/js/wishList';
// //import Porosia from './components/js/porosia';
// import Pagesa from './components/js/pagesa';
// import AddBook from './components/js/addBook';
// // import VForm from './components/js/VForm'
// import SignupForm from './components/js/SignupForm';
// import UpdatePunetori from './components/js/updatePunetori';
// import LibriDashboard from './components/js/LibriDashboard';
// import UpdateLibri from './components/js/updateLibri';
// import UpdateWishCard from './components/js/UpdateWishCard';
// import WLdashboard from './components/js/WLdashboard';
// import ClientSignUpForm from './components/js/ClientSignUp';
// import PunetoretDashB from './components/js/punetoretDshB';
// import MenaxheriDashB from './components/js/menaxheriDshB';
// import UpdateMenaxheri from './components/js/updateMenaxheri';
// import Romance from './components/js/Romance';
// const authorizedRoutes = [
//   { path: '/WLdashboard', element: <WLdashboard />, allowedRoles: [1] },
//   { path: '/punetoretDshB', element: <PunetoretDashB />, allowedRoles: [1, 3] },
//   { path: '/LibriDashboard', element: <LibriDashboard />, allowedRoles: [1, 2] },
//   { path: '/bookPage/:id', element: <BookPage /> ,allowedRoles: [1,2,3,4]},

//   // General pages accessible to all users
//   { path: '/', element: <HomePage /> },
//   { path: '/feed', element: <Feed /> },
//   { path: '/logIn', element: <LoginForm /> },
//   { path: '/signup', element: <SignupForm /> },
//   { path: '/wishList/:Wish_ID', element: <UpdateWishCard /> },
//   { path: '/ClientSignUpForm', element: <ClientSignUpForm /> },
//   { path: '/wishList', element: <WishList /> },
//   { path: '/Romance', element: <Romance /> },
//   { path: '/profilePage', element: <ProfilePage /> }
//   // Authorized pages for specific roles
// ];



// const handleUnauthorizedAccess = () => {
//   return (
//     <Navigate to="/" />
//   );
// };
// function App() {
//   console.log('authorizedRoutes:', authorizedRoutes);
//   return (
//     <Router>
//       <Routes>
//         {authorizedRoutes.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={
//               route.allowedRoles ? (
//                 <AuthorizationHandler
//                   element={route.element}
//                   allowedRoles={route.allowedRoles}
//                 />
//               ) : (
//                 route.element
//               )
//             }
//           />
//         ))}
//       </Routes>
//     </Router>
//   );
// }
// function AuthorizationHandler({ element, allowedRoles }) {
//   const [roleId, setRoleId] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/login', { withCredentials: true });
//         const { roleId } = response.data;

//         // Store the user's role in state
//         setRoleId(roleId);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         // Handle error
//         setIsLoading(false);
//       }
//     };

//     // Check if user is logged in before making the GET request
//     if (document.cookie.includes('accessToken')) {
//       checkAuthentication();
//     } else {
//       setIsLoading(false);
//     }
//   }, []);

//   if (isLoading) {
//     // Show a loading indicator or component while checking authentication
//     return <div>Loading...</div>;
//   }

//   console.log('allowedRoles:', allowedRoles);
//   // Check if the user's role is allowed for the route
//   const isAuthorized = allowedRoles ? allowedRoles.includes(roleId) : true;

//   console.log('roleId:', roleId);
//   console.log('allowedRoles:', allowedRoles);
//   console.log('isAuthorized:', isAuthorized);

//   if (!isAuthorized) {
//     return handleUnauthorizedAccess();
//   }

//   return element;
// }
// export default App;
// function App() {
//   const [roleId, setRoleId] = useState(null);

//   useEffect(() => {
//     // Fetch the user's role ID from the server
//     axios
//       .get('http://localhost:8081/login', {
//         withCredentials: true,
//       })
//       .then(res => {
//         const { roleId } = res.data;
//         setRoleId(roleId);
//       })
//       .catch(err => {
//         // Handle any errors
//         console.log(err);
//       });
//   }, []);

//   const authorizedRoutes = [
//     // General pages accessible to all users
//     { path: '/', element: <HomePage /> },
//     { path: '/feed', element: <Feed /> },
//     { path: '/logIn', element: <LoginForm /> },
//     { path: '/signup', element: <SignupForm /> },
//     { path: '/wishList/:Wish_ID', element: <UpdateWishCard /> },
//     { path: '/ClientSignUpForm', element: <ClientSignUpForm /> },
//     { path: '/wishList', element: <WishList /> },
//     { path: '/Romance', element: <Romance /> },
//     { path: 'profilePage', element: <ProfilePage /> },
//     // Authorized pages for specific roles
//     { path: '/WLdashboard', element: <WLdashboard />, allowedRoles: ['1'] },
//     { path: '/punetoretDshB', element: <PunetoretDashB />, allowedRoles: ['1', '3'] },
//     { path: '/LibriDashboard', element: <LibriDashboard />, allowedRoles: ['1', '2'] },
//     { path: '/bookPage/:id', element: <BookPage /> ,allowedRoles: ['1','2','3','4']}
//   ];

//   const handleUnauthorizedAccess = () => {
//     return (
//       <div>
//         <h3>Unauthorized Access</h3>
//         <p>You don't have permission to access this page.</p>
//         <p>Please contact your administrator for assistance.</p>
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <Routes>
//         {authorizedRoutes.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={
//               route.allowedRoles && (!roleId || !route.allowedRoles.includes(roleId.toString()))? (
//                 handleUnauthorizedAccess()
//               ) : (
//                 route.element
//               )
//             }
//           />
//         ))}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
//   return ( 
//    <Router>
//    <Routes>
//      <Route path="feed" element={<Feed />}></Route>
//      <Route index element={<HomePage/>} />
//      <Route path="logIn" element={<LoginForm/>}></Route>
//      <Route path="feed" element={<Feed/>}></Route>
//     <Route path='profilePage' element = {<ProfilePage/>}></Route>
//     <Route path='wishList' element = {<WishList></WishList>}></Route>
//     <Route path='pagesa' element = {<Pagesa></Pagesa>}></Route>
//     <Route path="/bookPage/:id" element={<BookPage />} />
//     <Route path = '/dashboard' element ={<Dashboard></Dashboard>}></Route>
//     <Route path='/punetori/:Personi_ID' element={<UpdatePunetori/>} />
//     <Route path='addBook' element={<AddBook/>} />
//     <Route path='SignupForm' element={<SignupForm/>}/>
//     <Route path='ClientSignUp' element={<ClientSignUpForm/>}/>
//     <Route path='/libri/:Isbn' element={<UpdateLibri/>} />
//     <Route path='WLdashboard' element={<WLdashboard/>} />
//     <Route path ='ClientSignUpForm' element={<ClientSignUpForm></ClientSignUpForm>}></Route>
//     <Route path='/LibriDashboard' element={<LibriDashboard></LibriDashboard>}></Route>
//     <Route path='/menaxheri/:Personi_ID' element={<UpdateMenaxheri />} />
//     <Route path ='/punetoretDshB' element={<PunetoretDashB></PunetoretDashB>}></Route>
//     <Route path ='/menaxheriDshB' element={<MenaxheriDashB></MenaxheriDashB>}></Route>
//     <Route path='/wishList/:Wish_ID' element={<UpdateWishCard />} />
//     <Route path='/Romance' element={<Romance />} />
    

    
     
   
//  </Routes>
//  </Router>
//   )
 
// }

