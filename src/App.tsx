import React, { useEffect } from 'react';
import './App.css';
import {
  Container, createTheme, Grid, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FiltersMenu from './components/FiltersMenu/FiltersMenu';
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import AuthorizationModal from './components/authorization-modal/auth-modal';
import { IStore } from './interfaces';
import { openLoginModal, closeLoginModal } from '../redux/actions';
import { useAuthenticationStatus } from './hooks';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') setAuthenticationStatus(true);
    else setAuthenticationStatus(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <AuthorizationModal />
        <Container>
          <Grid container spacing={1}>
            <FiltersMenu />
            <MoviesList />
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default App;
