import React, { useState, useContext, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../../helper/context/userContext";
import AddIcon from "@mui/icons-material/Add";

import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";

import Fab from "@mui/material/Fab";
import Container from "@mui/material/Container";

import SearchIcon from "@mui/icons-material/Search";
// import { t, useTranslation } from "react-i18next";
import MySearch from "./Search";
import { Box, Button, Grid, Typography } from "@mui/material";

const Loader = lazy(() => import("../loader/Loader"));
const SettingDrawer = lazy(() => import("../settingDrawer/SettingDrawer"));

const FaqAddModel = lazy(() =>
  import("../../pages/home/faq/AddFaq/FaqAddModel")
);
const OtherNav = lazy(() => import("../../component/submenu/OtherNav"));
const DesktopMenu = lazy(() => import("./DesktopMenu"));
const fabStyle = {
  position: "fixed",
  bottom: 30,
  left: 16,
};

const Navbar = () => {
  console.log("Navbar render");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [t, i18n] = useTranslation();

  const { userId, userName, setUserName, userAvatar } = useContext(UserDetail);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setUserName("nadish");
  };

  return (
    <>
      {userId === 0 && <Nouser />}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Container fixed>
          {userId !== 0 && <AddFaqButton />}
          <Toolbar
            variant="dense"
            sx={{
              marginBottom: "1.5rem",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <Suspense fallback={<Loader />}>
                  {userId !== 0 && <DesktopMenu />}
                </Suspense>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {userId !== 0 && (
                  <SearchMenu
                    handleOpenUserMenu={handleOpenUserMenu}
                    setOpenDrawer={setOpenDrawer}
                    userName={userName}
                    userAvatar={userAvatar}
                    userId={userId}
                  />
                )}
              </Grid>
            </Grid>
          </Toolbar>
          {userId !== 0 && <OtherNav userId={userId} />}
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <SettingDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          userName={userName}
        />
      </Suspense>
    </>
  );
};
export default React.memo(Navbar);

const AddFaqButton = () => {
  const [open, setOpen] = useState(false);
  const handleaddQuastion = () => {
    setOpen(true);
  };

  return (
    <>
      <Fab
        color="primary"
        size={"large"}
        aria-label="add"
        onClick={() => handleaddQuastion()}
        sx={fabStyle}
      >
        <AddIcon />
      </Fab>
      <Suspense fallback={<Loader />}>
        <FaqAddModel open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
};

function SearchMenu({
  handleOpenUserMenu,
  setOpenDrawer,
  userName,
  userAvatar,
  userId,
}) {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={8} align="center">
        <MySearch />
      </Grid>
      <Grid item xs={2} align="center">
        <SearchButton handleOpenUserMenu={handleOpenUserMenu} />
      </Grid>
      <Grid item xs={2} align="center">
        <AvatarIcon
          setOpenDrawer={setOpenDrawer}
          userName={userName}
          userAvatar={userAvatar}
        />
        {userId}
      </Grid>
    </Grid>
  );
}

function SearchButton({ handleOpenUserMenu }) {
  return (
    <IconButton
      variant="outlined"
      sx={{
        color: "background.paper",
        bgcolor: "primary.light",
      }}
      onClick={handleOpenUserMenu}
      aria-label="search"
      size="small"
    >
      <SearchIcon />
    </IconButton>
  );
}

function AvatarIcon({ setOpenDrawer, userName, userAvatar }) {
  return (
    <IconButton onClick={() => setOpenDrawer(true)}>
      <Avatar
        alt={userName}
        src={userAvatar}
        sx={{
          width: {
            xs: 33,
            sm: 33,
            md: 45,
            lg: 45,
          },
          height: {
            xs: 33,
            sm: 33,
            md: 45,
            lg: 45,
          },
          border: "1.5px solid white",
        }}
      />
    </IconButton>
  );
}

const Nouser = () => {
  const navigate = useNavigate();
  const handleGuest = (event) => {
    navigate("/login");
  };
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => {
          handleGuest();
        }}
        sx={{ mt: 0.1, mb: 2 }}
      >
        Login As Gust
      </Button>
    </>
  );
};
