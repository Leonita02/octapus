import React from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LibriDashboard from './LibriDashboard';
import PunetoriDashboard from './punetoretDshB';
import MenaxheriDashB from './menaxheriDshB';
import SideBar from './SideBar';
import AddBook from './addBook';
import Huazimet from './huazimetDshB';
import Huazimi from './huazimi';
import Lexuesit from './lexuesitDshB';
import Pagesa from './pagesa';
import MenaxhimiP from './menaxhimiP';
import PagesaForm from './pagesaForm';
import PorosiaDashboard from './porosiaDashboard';
import Porosia from './porosia';
import SignupForm from './SignupForm';
import UpdateLibri from './updateLibri';
import UpdateMenaxheri from './updateMenaxheri';
import UpdatePunetori from './updatePunetori';
import VForm from './VForm';
import WLdashboard from './WLdashboard.js';
import Feed from './feed';
import ProfilePage from './profilePage';
import Romance from './Romance';
import Drame from './Drame';
import BookPage from './bookPage';
import WishList from './wishList';
import UpdateWishCard from './UpdateWishCard';
import DashboardM from './dashboardM';
import Rezervimet from './rezervimetDshb';
import HistoriaPagesav from './historia_pagesave';

const ProtectedRoutes = () => {
  const [cookies] = useCookies(['userId', 'roleId']);
  const navigate = useNavigate();
  const location = useLocation();

  const LdashboardAllowedRoles = ['1', '2'];
  const PntDshbAllowedRoles = ['1'];
  const SideBarAllowedRoles = ['1', '2', '3'];
  const addBookAllowedRoles =['3'];
  const huazimetAllowedRoles=['1','2','3'];
  const huazimiAllowedRoles=['1','2','3'];
  const lexuesitAllowedRoles=['1','2','3'];
  const menaxheriDshBAllowedRoles= ['1'];
  const menaxhimiPAllowedRoles=['1'];
  const pagesaAllowedRoles=['1','2','3'];
  const pagesaFormAllowedRoles=['2','3'];
  const porosiaDAllowedRoles=['1'];
  const porosiaAllowedRoles =['2'];
  const signupFormAllowedRoles=['1'];
  const updateLibriAllowedRoles=['3'];
  const updateMenaxheriAllowedRoles = ['1'];
  const updatePunetoriAllowedRoles = ['1'];
  const formaPushAllowedRoles = ['2','3'];
  const wishListAllowedRoles=['2'];
  const feedAllowedRoles = ['4'];
  const profilePAllowedRoles = ['4'];
  const RomanceAllowedRoles = ['4'];
  const DrameAllowedRoles = ['4'];
  const BookPageAllowedRoles = ['1','2','3','4'];
  const wishAllowedRoles = ['4'];
  const updatewishAllowedRoles = ['4'];
  const dashboardAllowedRoles=['1','2','3'];
  const rezervimetAllowedRoles=['2','3'];
  const historiaPagesavAllowedRoles = ['1'];




  React.useEffect(() => {
    if (!isAuthorized(LdashboardAllowedRoles, cookies) && !isAuthorized(PntDshbAllowedRoles, cookies) && !isAuthorized(SideBarAllowedRoles, cookies)
    &&!isAuthorized(addBookAllowedRoles, cookies)&&!isAuthorized(huazimetAllowedRoles, cookies)&&!isAuthorized(huazimiAllowedRoles, cookies) && !isAuthorized(lexuesitAllowedRoles, cookies)
    &&!isAuthorized(menaxheriDshBAllowedRoles, cookies && !isAuthorized(menaxhimiPAllowedRoles, cookies)&&!isAuthorized(pagesaAllowedRoles, cookies)&&!isAuthorized(pagesaFormAllowedRoles, cookies)
    &&!isAuthorized(porosiaDAllowedRoles, cookies) && !isAuthorized(porosiaAllowedRoles, cookies) && !isAuthorized(signupFormAllowedRoles, cookies)
    && !isAuthorized(updateLibriAllowedRoles, cookies) && !isAuthorized(updateMenaxheriAllowedRoles, cookies) && !isAuthorized(updatePunetoriAllowedRoles, cookies) && !isAuthorized(formaPushAllowedRoles, cookies)
    && !isAuthorized(wishListAllowedRoles, cookies)   && !isAuthorized(feedAllowedRoles, cookies)   && !isAuthorized(profilePAllowedRoles, cookies) && !isAuthorized(RomanceAllowedRoles, cookies) && !isAuthorized(DrameAllowedRoles, cookies) &&
    !isAuthorized(BookPageAllowedRoles, cookies) && !isAuthorized(wishAllowedRoles, cookies) && !isAuthorized(updatewishAllowedRoles, cookies) && !isAuthorized(dashboardAllowedRoles, cookies) && !isAuthorized(rezervimetAllowedRoles, cookies)
    && !isAuthorized(historiaPagesavAllowedRoles, cookies))) {
      navigate('/LoginForm');
    }
  }, [cookies, navigate]);

  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  return (
    <Routes>
      <Route path="/LibriDashboard" element={<LibriDashboard />} />
      <Route path="/puntoretDshB" element={<PunetoriDashboard />} />
      <Route path="/sideBar" element={<SideBar />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path='/huazimetDshB' element={<Huazimet/>}/>
      <Route path='/huazimi' element={<Huazimi/>}/>
      <Route path='/lexuesitDshB' element={<Lexuesit/>}/>
      <Route path='/menaxheriDshB' element={<MenaxheriDashB/>}/>
      <Route path='/menaxhimiP' element={<MenaxhimiP/>}/>
      <Route path='/pagesa' element={<Pagesa/>}/>
      <Route path='/pagesaForm' element={<PagesaForm/>}/>
      <Route path='/porosiaDashboard' element={<PorosiaDashboard/>}/>
      <Route path='/porosia' element={<Porosia/>}/>
      <Route path='/SignupForm' element={<SignupForm/>}/>
      <Route path='/libri/:Isbn' element={<UpdateLibri/>}/>
      <Route path='/menaxheri/:Personi_ID' element={<UpdateMenaxheri/>}/>
      <Route path='/punetori/:Personi_ID' element={<UpdatePunetori/>}/>
      <Route path='/VForm' element={<VForm/>}/>
      <Route path='/historia_pagesave' element={<HistoriaPagesav/>}/>
      <Route path ='/WLdashboard' element ={<WLdashboard/>}/>
      <Route path="/dashboardM" element={<DashboardM />} />
      <Route path="/rezervimetDshb" element={<Rezervimet/>} />
      <Route path ='/feed' element ={<Feed/>}/>
      <Route path ='/profilePage' element={<ProfilePage/>}/>
      <Route path ='/Romance' element={<Romance/>}/>
      <Route path ='/Drame' element={<Drame/>}/>
      <Route path ='/bookPage/:id' element={<BookPage/>}/>
      <Route path ='/wishlist' element={<WishList/>}/>
      <Route path ='/wishList/:Wish_ID' element={<UpdateWishCard/>}/>

    </Routes>
  );
};

export default ProtectedRoutes;