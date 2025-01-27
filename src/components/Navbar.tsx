import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { navBarOptions, PATHS } from "../constant/routes";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../services/authService";
import { showErrorToast } from "../utils/toast";
import { LOGOUT_SUCCESS } from "../constant/messages";

const NavBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (route: string) => {
    setAnchorElNav(null);
    navigate(route);
  };

  const user = JSON.parse(localStorage.getItem("userDetails") || "null");

  const handleLogOut = (route: string) => {
    setAnchorElNav(null);
    adminLogout();
    showErrorToast(LOGOUT_SUCCESS)
    navigate(route);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        width: "100%",
        background: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "#242424",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textTransform: "capitalize",
              }}
            >
              {!user ? (
                navBarOptions.map(({ text, route }) => (
                  <Button
                    key={text}
                    onClick={() => handleCloseNavMenu(route)}
                    sx={{
                      display: "block",
                      color: "#242424",
                    }}
                  >
                    {text}
                  </Button>
                ))
              ) : (
                <Button
                  onClick={() => handleLogOut(PATHS.login)}
                  sx={{
                    display: "block",
                    color: "#242424",
                    border: "1px solid",
                  }}
                >
                  Log Out
                </Button>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: { xs: 0, sm: 1 },
            }}
          >
            <Avatar
              alt="Techerudite"
              src="/techerudite-logo.svg"
              sx={{
                height: "44px",
                width: "56px",
                objectFit: "contain",
                borderRadius: 0,
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!user ? (
              navBarOptions.map(({ text, route }) => (
                <Button
                  variant="outlined"
                  key={text}
                  onClick={() => handleCloseNavMenu(route)}
                  sx={{
                    display: "block",
                    color: "#242424",
                    textTransform: "capitalize",
                    margin: 0.5,
                    border: "none",
                    borderRadius: 0,
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: "2px",
                      backgroundColor: "#242424",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {text}
                </Button>
              ))
            ) : (
              <Button
                variant="outlined"
                onClick={() => handleLogOut(PATHS.login)}
                sx={{
                  display: "block",
                  color: "#242424",
                  textTransform: "capitalize",
                  margin: 0.5,
                  border: "none",
                  borderRadius: 0,
                  position: "relative",
                  overflow: "hidden",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "2px",
                    backgroundColor: "#242424",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                Log Out
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
