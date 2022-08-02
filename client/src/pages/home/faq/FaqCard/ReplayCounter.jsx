import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge, { badgeClasses } from "@mui/material/Badge";
import QuickreplyIcon from "@mui/icons-material/Quickreply";

export function ReplayCounter({ answerCount }) {
  return (
    <Tooltip title="Reply No!">
      <Badge
        badgeContent={answerCount}
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        variant="standard"
        sx={{
          [`& .${badgeClasses.standard}`]: {
            width: "15px",
            height: "20px",
            borderRadius: "20%"
          },
          "& .MuiBadge-badge": {
            left: 9,
            top: 3,
            border: `2px solid `,
            // borderColor: "primary.light",
            color: "background.paper",
            padding: "4px ",
            fontSize: ".7rem"
          }
        }}
      >
        <IconButton aria-label="add to favorites" component="span">
          <QuickreplyIcon />
        </IconButton>
      </Badge>
    </Tooltip>
  );
}
