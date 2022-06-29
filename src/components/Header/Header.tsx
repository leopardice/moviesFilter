import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Header = () => (
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
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
