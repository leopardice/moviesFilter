import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useLoginModalStatus, { useAuthenticationStatus } from '../../hooks';

const Header = () => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const handleClickOpen = () => {
    setLoginModalStatus(true);
  };

  const logOutHandler = () => {
    setAuthenticationStatus(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          marginBottom: 2,
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <Button color="inherit">Menu</Button>
          {isAuthenticated
            ? <Button onClick={logOutHandler} color="inherit">LogOut</Button>
            : <Button onClick={handleClickOpen} color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
