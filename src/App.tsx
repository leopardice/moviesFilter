import React, { useEffect } from 'react';
import './App.css';
import {
  Container, createTheme, Grid, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import FiltersMenu from './pages/main/components/FiltersMenu/FiltersMenu';
import Header from './pages/main/components/Header/Header';
import MoviesList from './pages/main/components/MoviesList/MoviesList';
import AuthorizationModal from './pages/main/components/authorization-modal/auth-modal';
import { IStore } from './interfaces';
import { openLoginModal, closeLoginModal } from './redux/rootDir/actions';
import { useAuthenticationStatus } from './hooks';

const App = () => {
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') setAuthenticationStatus(true);
    else setAuthenticationStatus(false);
  }, []);

  return (
    <div className="App">
      <Header />
      <AuthorizationModal />
      <Outlet />
    </div>
  );
};
export default App;
