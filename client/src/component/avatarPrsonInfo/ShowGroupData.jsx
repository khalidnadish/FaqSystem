import { Avatar, Box, Chip, Typography } from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import ShowGroupDetail from "./ShowGroupDetail";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: "30vh",
  bgcolor: "background.paper",
  border: "3px solid ",
  borderColor: "primary.light",
  boxShadow: 24,
  borderRadius: "8px",
  borderColor: "warning.main",
};

const avatarStyle = {
  position: "relative",
  // top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "warning.main",
  boxShadow: 6,
  height: "50px",
  color: "background.paper",
  borderRadius: 4,
  borderColor: "warning.main",
};
const ShowGroupData = ({ avatarSrc, userid, username, cr_date }) => {
  
  return (
    <>
    <Box sx={style}>
      <Box sx={{ position: "relative" }}>
        <Box sx={avatarStyle}>
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              position: "absolute",
              top: "-15px",
              left: "15px",
              border: "7px solid white",
            }}
            src={avatarSrc}
          />
          <Box
            sx={{
              position: "absolute",
              left: "110px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                
                alignItems: "center",
                mt:1
                
              }}
            >
              <Typography variant="body1">{username}</Typography>
              <Typography variant="body2">{new Date(cr_date).toDateString()}</Typography>
            </Box>
          </Box>
          
        </Box>
      </Box>
        <ShowGroupDetail userid={userid} />
    </Box>
        </>
  );
};

export default ShowGroupData;
