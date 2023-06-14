import './App.css';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthorization } from './components/js/authorization';
import { useState } from 'react';
import { useEffect } from 'react';
import HomePage from "./components/js/HomePage";
import ProfilePage from './components/js/profilePage';
import BookPage from "./components/js/bookPage";
import WishList from './components/js/wishList';
import Pagesa from './components/js/pagesa';
import AddBook from './components/js/addBook';
import VForm from './components/js/VForm'
import SignupForm from './components/js/SignupForm';
import UpdatePunetori from './components/js/updatePunetori';
import UpdateLibri from './components/js/updateLibri';
import UpdateWishCard from './components/js/UpdateWishCard';
import WLdashboard from './components/js/WLdashboard';
import ClientSignUpForm from './components/js/ClientSignUp';
import PunetoretDashB from './components/js/punetoretDshB';
import MenaxheriDashB from './components/js/menaxheriDshB';
import UpdateMenaxheri from './components/js/updateMenaxheri';
import SideBar from './components/js/SideBar';
import LexuesiDashB from './components/js/lexuesitDshB';
import Romance from './components/js/Romance';
import MenaxhimiP from './components/js/menaxhimiP';
import Drame from './components/js/Drame';
import AboutPage from './components/js/AboutUs';
import Huazimet from './components/js/huazimetDshB';
import Porosia from './components/js/porosia';
import Pdashboard from './components/js/porosiaDashboard';
import Huazimi from './components/js/huazimi';
import Feed from './components/js/feed';
import DashboardM from './components/js/dashboardM';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/js/LoginForm';
import ProtectedRoutes from './components/js/protectedRoutes';
import LibriDashboard from './components/js/LibriDashboard';
import PasswordChangeForm from './components/js/PasswordChangeForm';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/ClientSignup" element={<ClientSignUpForm />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/Romance" element={<Romance />} />
        <Route path="/pagesa" element={<Pagesa />} />
        <Route path="/PasswordChangeForm" element={<PasswordChangeForm />} />
        <Route path="/Drame" element={<Drame />} />
        <Route path="/bookPage/:id" element={<BookPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/wishList/:Wish_ID" element={<UpdateWishCard />} />

        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;