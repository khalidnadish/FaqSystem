import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: "30vh",
  bgcolor: "background.paper",
  border: "2px solid ",
  borderColor: "primary.light",
  boxShadow: 24,
  borderRadius: "8px",
};

const avatarStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "warning.main",
  boxShadow: 6,
  height: "60px",
  color: "background.paper",
};
const ShowGroupData = ({ avatarSrc, username, cr_date }) => {
  return (
    <Box sx={style}>
      <Box sx={{ position: "relative" }}>
        <Box sx={avatarStyle}>
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              position: "absolute",
              top: "-40px",
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
            <Typography>{username}</Typography>
            <Typography>{cr_date}</Typography>
          </Box>
          <Box mt={10}>
            <Chip label="sdsd1" color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowGroupData;
