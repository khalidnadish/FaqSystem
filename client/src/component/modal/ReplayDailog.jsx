import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { FiMaximize2 } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
 
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IoMdCloseCircle } from "react-icons/io";
 
import { GoCommentDiscussion } from "react-icons/go";

const ReplayDailog = ({
  showModal,
  setShowModal,
  children,
  avatarSrc,
  username,
  cr_date,
  count,
  title,
  prefix1,
  Quastion,
}) => {
  const [flscreen, setFlscreen] = useState(true);
  return (
    <>
      {/* TODO: import Draggable from 'react-draggable'; */}
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        fullScreen={flscreen}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              minWidth: "300px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            bgcolor: "primary.dark",
            color: "background.paper",
            boxShadow: 24,
            padding: 1,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={1} sm={1} md={1}>
              <Avatar
                src={avatarSrc}
                sx={{
                  width: "55px",
                  height: "55px",
                  border: "3px solid white",
                }}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={2} align="left">
              <Typography align="left" variant="body1" color={"primary.light"}>
                {username}
              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                color={"primary.light"}
              >
                Publish on:{new Date(cr_date).toDateString()}
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid",
                  borderRadius: "6px",
                  minHeight: "60px",
                  alignItems: "center",
                  padding:"5px"
                }}
              >
                <GoCommentDiscussion size={"2rem"}/>
                <Typography
                  align="left"
                  variant="h6"
                  color={"background.paper"}
                  ml={2}
                >
                  {Quastion}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
            <Button  startIcon={<IoMdCloseCircle size={"2rem"}/>}
            sx={{ color: "background.paper" }}
            onClick={() => setShowModal(false)}
          />
           <Button onClick={() => setFlscreen(!flscreen)}>
                {flscreen ? <FiMinimize2 /> : <FiMaximize2 />}
              </Button>
         
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent>{children}</DialogContent>
      
        
      </Dialog>
    </>
  );
};

export default ReplayDailog;
