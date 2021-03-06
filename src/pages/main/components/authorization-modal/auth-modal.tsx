import React, { FormEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import useLoginModalStatus, {
  useAuthenticationStatus,
} from "../../../../shared/hooks";

export interface IUserInfo {
  login: string;
  password: string;
}

const AuthorizationModal = () => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const handleClose = () => {
    setLoginModalStatus(false);
  };

  const [login, setLogin] = useState("a");
  const [password, setPassword] = useState("1");
  const userInfo: IUserInfo = {
    login: "a",
    password: "1",
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isUserApproved =
      login === userInfo.login && password === userInfo.password;
    if (isUserApproved) {
      setAuthenticationStatus(true);
    }
  };

  const handleLoginChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
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
          <Button type="submit" onClick={handleClose}>
            Log In
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default AuthorizationModal;
