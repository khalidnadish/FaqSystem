import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export function AvatarIcon({ setOpenDrawer, userName, userAvatar }) {
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
            lg: 45
          },
          height: {
            xs: 33,
            sm: 33,
            md: 45,
            lg: 45
          },
          border: "1px solid",
          borderColor: "background.paper"
        }} />
    </IconButton>
  );
}
