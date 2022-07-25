import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
 
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FiMaximize2 } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
 
 

const AnswerDailog = ({
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
  const [flscreen, setFlscreen] = useState(false);
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
            bgcolor: "primary",
            color: "background.paper",
            boxShadow: 24,
            padding: 1,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={3} sm={3} md={1.5}>
              <Avatar
                src={avatarSrc}
                sx={{
                  width: "55px",
                  height: "55px",
                  border: "3px solid white",
                }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3} align="left">
              <Typography align="left" variant="body1" color={"primary.dark"}>
                {username}
              </Typography>
              <Typography
                align="left"
                variant="caption"
                color={"primary.light"}
                display="block"
                
              >
             {new Date(cr_date).toDateString()}
              </Typography>
            </Grid>
            <Grid item xs={4} sm={5} md={6}>
             
            </Grid>
            <Grid item xs={2} sm={1} md={1} align="left">
            <Button  startIcon={<IoMdCloseCircle size={"2rem"}/>}
            sx={{ color: "primary" }}
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

export default AnswerDailog;
