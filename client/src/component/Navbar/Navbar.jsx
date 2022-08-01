import React, { useState, useContext, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../../helper/context/userContext";
import { BiCommentAdd } from "react-icons/bi";
import { VscHome } from "react-icons/vsc";
import { FaBell } from "react-icons/fa";




import {Badge,IconButton ,AppBar ,Avatar ,Toolbar ,Fab , Container,Tooltip, Button, Grid } from "@mui/material";


// import Badge from "@mui/material/Badge";
// import IconButton from "@mui/material/IconButton";
// import AppBar from "@mui/material/AppBar";
// import Avatar from "@mui/material/Avatar";
// import Toolbar from "@mui/material/Toolbar";
// import Fab from "@mui/material/Fab";
// import Container from "@mui/material/Container";
// import Tooltip from "@mui/material/Tooltip";
// import {  Button, Grid } from "@mui/material";






import { styled } from "@mui/material/styles";


import MySearch from "./Search";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { BsCoin } from "react-icons/bs";


const Loader = lazy(() => import("../loader/Loader"));
const SettingDrawer = lazy(() => import("../settingDrawer/SettingDrawer"));

const FaqAddModel = lazy(() =>
  import("../../pages/home/faq/AddFaq/FaqAddModel")
);
const OtherNav = lazy(() => import("../../component/submenu/OtherNav"));
 
const fabStyle = {
  position: "fixed",
  bottom: 30,
  left: 16,
};

 
const homefabStyle = {
  position: "fixed",
  bottom: 90,
  left: 16,
};


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 7,
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));

const Navbar = () => {
  // console.log("Navbar render");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [t, i18n] = useTranslation();

  const { userId, userName, setUserName, userAvatar } = useContext(UserDetail);

 

  return (
    <>
      {userId === 0 && <Nouser />}
      <AppBar   position="sticky" 
      
        sx={{
          backgroundColor: "secondary.main",
          borderRadius:"0px 0px 8px 8px",
          padding:0
          
        }}
      >
        <Container  >
          {userId !== 0 && <HomeFaqButton />}
          {userId !== 0 && <AddFaqButton />}
          <Toolbar
            variant="regular"
            disableGutters
            
            sx={{
              marginBottom: "1.5rem",alignItems:"center"
            }}
          >
            <Grid  container    alignItems="center" >
              
              <Grid item xs={12} sm={12} md={12}>
                {userId !== 0 && (
                  <SearchMenu
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
      {openDrawer &&
      <Suspense fallback={<Loader xcolor={"error"} />}>
        <SettingDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          userName={userName}
        />
      </Suspense>
}
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
        color="error"
        size={"small"}
        aria-label="add"
        onClick={() => handleaddQuastion()}
        sx={fabStyle}
      >
        <BiCommentAdd size="1.5rem" />
      </Fab>
      <Suspense fallback={<Loader />}>
        <FaqAddModel open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
};


const HomeFaqButton = () => {
  const [open, setOpen] = useState(false);
  const handleaddQuastion = () => {
    setOpen(true);
  };

  return (
    <>
      <Fab
        color="grey.300"
        size={"small"}
        aria-label="add"
        onClick={() => handleaddQuastion()}
        sx={homefabStyle}
      >
      
        <HomeRoute />
      </Fab>
      
    </>
  );
};






function SearchMenu({
 
  setOpenDrawer,
  userName,
  userAvatar,
  userId,
}) {
  return (
    <Grid container  alignItems="center" >
       
      <Grid item xs={2}>
        <Balance />
      </Grid>
     

      <Grid item xs={7} md={8}>
        <MySearch />
      </Grid>

      <Grid item xs={1}  >
        <Notifacation />
      </Grid>
      <Grid item xs={1.5} md={1}>
        <AvatarIcon
          setOpenDrawer={setOpenDrawer}
          userName={userName}
          userAvatar={userAvatar}
        />
        {/* {userId} */}
      </Grid>
      
      
    </Grid>
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
          border: "1px solid",
          borderColor:"background.paper"
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



function Notifacation({ underWork }) {
  return (
     
          <StyledBadge badgeContent={4} color="primary">
            <FaBell size={30} color={"red"} />
          </StyledBadge>
 
  );
}


function HomeRoute({}) {
  return (
    <Tooltip title="Home Page">
      <Link to={`/`}>
        <VscHome size={"2rem"} color={"red"} />
      </Link>
    </Tooltip>
  );

  
}
function Balance({}) {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={<BsCoin />}
      count={"15051"}
      xpad={"3px 10px 3px 10px"}
      xcolor={"primary"}
      xborderColor="primary.light" // onClick={() => setShowModal(true)}
      toolTip="Balance Click To show Statment"
    />
  );
}