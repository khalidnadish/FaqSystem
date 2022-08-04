import React, { useState, Suspense } from "react";
import { BiCommentAdd } from "react-icons/bi";
import Fab from "@mui/material/Fab";
import { fabStyle, Loader, FaqAddModel } from "./Navbar";

export const AddFaqButton = () => {
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
