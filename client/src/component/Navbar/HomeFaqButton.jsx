import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import { homefabStyle, HomeRoute } from "./Navbar";

export const HomeFaqButton = () => {
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
