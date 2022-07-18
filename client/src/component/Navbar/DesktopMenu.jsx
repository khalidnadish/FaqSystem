import React from "react";
import { Link } from "react-router-dom";
import { GiShadowFollower } from "react-icons/gi";
import { FaBell, FaLayerGroup } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

export default function DesktopMenu() {
  const xcolor = "white";
  const underWork = () => {
    alert("under Constractn ...");
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2.4}>
          <HomeRoute />
        </Grid>
        <Grid item xs={2.4}>
          <PepoleYouFollow underWork={underWork} xcolor={xcolor} />
        </Grid>
        <Grid item xs={2.4} align="center">
          <Quastions underWork={underWork} xcolor={xcolor} />
        </Grid>
        <Grid item xs={2.4}>
          <Groups underWork={underWork} xcolor={xcolor} />
        </Grid>
        <Grid item xs={2.4}>
          <Notifacation underWork={underWork} xcolor={xcolor} />
        </Grid>
      </Grid>
    </>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

function HomeRoute({}) {
  return (
    <Tooltip title="Home Page">
      <MenuItem>
        <Link to={`/`}>
          <VscHome size={25} color={"red"} />
        </Link>
      </MenuItem>
    </Tooltip>
  );
}

function PepoleYouFollow({ underWork, xcolor }) {
  return (
    <Tooltip title="Poeple You Follow">
      <MenuItem
        onClick={() => {
          underWork();
        }}
      >
        <Link to={`/`}>
          <GiShadowFollower size={30} color={xcolor} />
        </Link>
      </MenuItem>
    </Tooltip>
  );
}

function Quastions({ underWork, xcolor }) {
  return (
    <Tooltip title="Your Quastion">
      <MenuItem
        onClick={() => {
          underWork();
        }}
      >
        <Link to={`/`}>
          <MdChatBubble size={30} color={xcolor} />
        </Link>
      </MenuItem>
    </Tooltip>
  );
}

function Groups({ underWork, xcolor }) {
  return (
    <Tooltip title="Workspace You Follow">
      <MenuItem
        onClick={() => {
          underWork();
        }}
      >
        <Link to={`/`}>
          <FaLayerGroup size={30} color={xcolor} />
        </Link>
      </MenuItem>
    </Tooltip>
  );
}

function Notifacation({ underWork, xcolor }) {
  return (
    <Tooltip title="Notifaction">
      <MenuItem
        onClick={() => {
          underWork();
        }}
      >
        <Link to={`/`}>
          <StyledBadge badgeContent={4} color="primary">
            <FaBell size={30} color={xcolor} />
          </StyledBadge>
        </Link>
      </MenuItem>
    </Tooltip>
  );
}
