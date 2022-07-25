import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AntModal = ({...props}) => {
  const [flscreen,setFlscreen]= useState(false)
  return (
    <>
      {/* TODO: import Draggable from 'react-draggable'; */}
      <Dialog
        open={props.showModal}
        onClose={() => props.setShowModal(false)}
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
            <Grid item xs={3} sm={2} md={2}>
              <Avatar
                src={props.avatarSrc}
                sx={{
                  width: "55px",
                  height: "55px",
                  border: "3px solid white",
                }}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={8} align="left">
            <Typography align="left" variant="body1">{props.title}</Typography>
             
            </Grid>
            <Grid item xs={2}>
             
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions
          disableSpacing={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "primary.light",
            padding: 0.5,
          }}
        >
         <Typography color={"lightgray"} ml={2}>{props.count} {props.prefix1} </Typography>
         
          <Button
            sx={{ color: "background.paper" }}
            onClick={() => props.setShowModal(false)}
          >
            Close
          </Button>
          <Button
            sx={{ color: "background.paper" }}
            onClick={() => setFlscreen(!flscreen)}
          >
            {flscreen ? "min":"max"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AntModal;
