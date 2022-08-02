import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function AddToFavorite({ }) {
  return (
    <Tooltip title="Like Quastion">
      <IconButton aria-label="add to favorites" component="span" size="small">
        <FavoriteIcon size="small" color="success" />
      </IconButton>
    </Tooltip>
  );
}
