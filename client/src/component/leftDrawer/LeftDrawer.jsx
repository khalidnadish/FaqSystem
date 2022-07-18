import React from "react";
import Drawer from "@mui/material/Drawer";

function LeftDrawer({ open, setOpen, children, drawerWidth, anchor, drHight }) {
  // todo: check render it twice render
  // todo

  return (
    <>
      <Drawer
        variant="temporary"
        anchor={anchor}
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        // disableSwipeToOpen
        PaperProps={{
          sx: {
            // borderRadius: "8px 8px 0px 0px",
            width: "30%",
            marginTop: "auto",
            marginBottom: "auto",
            margin: "auto",
            height: drHight,
            // minHeight: "50vh",
            // bgcolor: "error.light",
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
}

export default React.memo(LeftDrawer);
