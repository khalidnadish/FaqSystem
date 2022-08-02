import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RateReviewIcon from "@mui/icons-material/RateReview";

export function AddAnswer({ }) {
  return (
    <Tooltip title="Add Answer">
      <IconButton
        // component="span"
        size="small"
        color="primary"
      >
        <RateReviewIcon fontSize="large" sx={{ color: "error.main" }} />
      </IconButton>
    </Tooltip>
  );
}
