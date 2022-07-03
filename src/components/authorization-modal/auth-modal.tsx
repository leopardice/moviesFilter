import React, {
  useState, FormEvent,
} from 'react';
import {
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, FormControl,
} from '@mui/material';
import useLoginModalStatus, { useAuthenticationStatus } from '../../hooks';

export interface IUserInfo {
  login: string;
  password: string;
}

const AuthorizationModal = () => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const handleClose = () => {
    setLoginModalStatus(false);
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const userInfo: IUserInfo = { login: 'a', password: '1' };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isUserApproved = (login === userInfo.login) && (password === userInfo.password);
    if (isUserApproved) {
      setAuthenticationStatus(true);
    }
  };

  const handleLoginChange = (e: { target: { value: React.SetStateAction<string> }}) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string> }}) => {
    setPassword(e.target.value);
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      <DialogTitle>Log In</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Login"
            type="text"
            onChange={handleLoginChange}
            value={login}
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handlePasswordChange}
            value={password}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose}>Log In</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default AuthorizationModal;
