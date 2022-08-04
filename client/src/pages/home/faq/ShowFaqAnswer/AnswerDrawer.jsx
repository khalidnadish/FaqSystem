import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const FaqId = lazy(() => import("../FaqId"));
const Loader = lazy(() => import("../../../../component/loader/Loader"));

function AnswerDrawer({ open, setOpen, faqid }) {
 
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="bottom"
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: "90%",
            borderRadius: "8px 8px 0px 0px",
            margin: "auto",
            maxHeight: "95vh",
            bgcolor: "background.paper",
          },
        }}


        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Suspense fallback={<Loader />}>
            <FaqId faqid={faqid} />
          </Suspense>
        </Box>
      </Drawer>
    </>
  );
}

export default AnswerDrawer;
