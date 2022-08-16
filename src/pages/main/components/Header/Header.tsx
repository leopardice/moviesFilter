import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useLoginModalStatus, {
  useAuthenticationStatus,
} from "../../../../shared/hooks";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          marginBottom: "1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "start",
            maxWidth: "1200px",
          }}
        >
          <Link className="pages-link" to="/">
            <Button sx={{ color: "white" }}>Home</Button>
          </Link>
          <Link className="pages-link" to="/search">
            <Button sx={{ color: "white" }}>Search</Button>
          </Link>
          <Box marginLeft="auto">
            {isAuthenticated ? (
              <Button onClick={logOutHandler} color="inherit">
                LogOut
              </Button>
            ) : (
              <Button onClick={handleClickOpen} color="inherit">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
