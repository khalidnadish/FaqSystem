import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export function ShowAnsewr({ setShowReplyDrawer, Quastion }) {
  return (
    <Tooltip title="click to see Answer's">
      <CardContent
        onClick={() => {
          setShowReplyDrawer(true);
        }}
        sx={{
          cursor: "pointer",
          "&:hover": {
            borderBottom: "5px solid",
            borderColor: "warning.dark",
            backgroundColor: "primary.dark",

            color: "background.paper",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Typography
          sx={{
            wordBreak: "break-word"
          }}
        >
          {Quastion}
        </Typography>
      </CardContent>
    </Tooltip>
  );
}
