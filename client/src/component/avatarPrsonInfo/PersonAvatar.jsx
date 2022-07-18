import React from "react";
import  Avatar from '@mui/material/Avatar';
 const PersonAvatar=({ avatar})=> {
  return (
    <Avatar // variant="rounded"
      src={avatar}
      aria-label="recipe"
      sx={{
        width: "80px",
        height: "80px",
        position: "absolute",
        top: "-20px",
        right: "15px",
        border: "4px solid white",
      }}
    />
  );
}
export default PersonAvatar