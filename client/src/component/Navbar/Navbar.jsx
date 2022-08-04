import React, { useState, useContext, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { UserDetail } from "../../helper/context/userContext";
import { VscHome } from "react-icons/vsc";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";



import { styled } from "@mui/material/styles";

import MySearch from "./Search";
import { AddFaqButton } from "./AddFaqButton";
import { HomeFaqButton } from "./HomeFaqButton";
import { Balance } from "./Balance";
import { Notifacation } from "./Notifacation";
import { Nouser } from "./Nouser";
import { AvatarIcon } from "./AvatarIcon";
import { Grid } from "@mui/material";
export const Loader = lazy(() => import("../loader/Loader"));
const SettingDrawer = lazy(() => import("../settingDrawer/SettingDrawer"));
export const FaqAddModel = lazy(() =>
  import("../../pages/home/faq/AddFaq/FaqAddModel")
);
const OtherNav = lazy(() => import("../../component/submenu/OtherNav"));
export const fabStyle = {
  position: "fixed",
  bottom: 30,
  left: 16,
};

export const homefabStyle = {
  position: "fixed",
  bottom: 90,
  left: 16,
};

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 7,
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { userId, userName,  userAvatar } = useContext(UserDetail);

  return (
    <>
      {userId === 0 && <Nouser />}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "secondary.main",
          // borderRadius: "0px 0px 8px 8px",
          padding: 1,
        }}
      >
        {/* <Container fixed> */}
          {userId !== 0 && <HomeFaqButton />}
          {userId !== 0 && <AddFaqButton />}

          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              marginBottom: "1.5rem",
              alignItems: "center",
              // width:"100%"
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                {userId !== 0 && (
                  <SearchMenu
                  setOpenDrawer={setOpenDrawer}
                  userName={userName}
                  userAvatar={userAvatar}
                  
                  />
                  )}
                  </Grid>
            </Grid>
              
          </Toolbar>
          {userId !== 0 && <OtherNav userId={userId} />}
        {/* </Container> */}
      </AppBar>

      
      {openDrawer && (
        <Suspense fallback={<Loader xcolor={"error"} />}>
          <SettingDrawer
            open={openDrawer}
            setOpen={setOpenDrawer}
            userName={userName}
          />
        </Suspense>
      )}
    </>
  );
};
export default React.memo(Navbar);

function SearchMenu({ setOpenDrawer, userName, userAvatar  }) {
  return (
    <GridContainer  alignItems={"center"}>
      <GridItem xs={1}>
        <Balance />
      </GridItem>

      <GridItem xs>
        <MySearch />
      </GridItem>

      <GridItem  xs={1}>
        <Notifacation />
      </GridItem>
      <GridItem xs={1}>
        <AvatarIcon
          setOpenDrawer={setOpenDrawer}
          userName={userName}
          userAvatar={userAvatar}
        />
      
      </GridItem>
    </GridContainer>
  );
}

export function HomeRoute({}) {
  return (
    <Tooltip title="Home Page">
      <Link to={`/`}>
        <VscHome size={"2rem"} color={"red"} />
      </Link>
    </Tooltip>
  );
}

