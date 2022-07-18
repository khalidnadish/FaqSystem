import React from "react";
import Button from "@mui/material/Button";

import { BsFillEyeFill } from "react-icons/bs";


export function ShowAllButton({ handleShowAllFAQ }) {
  return (
    <Button
      color="secondary"
      onClick={() => handleShowAllFAQ()}
      startIcon={<BsFillEyeFill />}
      // disableElevation
      // size="small"
      variant="contained"
      fullWidth
      sx={{
        color: "background.paper",
      }}
    >
      Show
    </Button>
  );
}
