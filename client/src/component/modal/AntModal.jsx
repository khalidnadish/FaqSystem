import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FiMaximize2 } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";

const AntModal = ({ ...props }) => {
  const [flscreen, setFlscreen] = useState(false);
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
            // bgcolor: "primary.dark",
            color: "background.paper",
            boxShadow: 24,
            padding: "5px",
          }}
        >
          <Grid container alignItems={"center"}>
            <Grid item xs={4.75} sm={4} md={3} align="center">
              <Box
                sx={{
                  border: "1px solid ",
                  borderColor:"info.light",
                  borderRadius:1,
                  diplay: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  margin: "auto",

                }}
              >
                <Avatar
                  src={props.avatarSrc}
                  sx={{
                    width: "35px",
                    height: "35px",
                    border: "2px solid white",
                    disply: "block",
                    margin: "auto",
                  }}
                />
                <Typography
                  color={"primary"}
                  variant="caption"
                  display="block"
                  margin="auto"
                >
                  {props.title}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs align="center">
              <Typography
                display="block"
                align={"center"}
                color={"lightgray"}
                ml={2}
              >
                {props.count} {props.prefix1}
              </Typography>
            </Grid>
            <Grid item xs={2} md={1} align={"left"}>
              <Button onClick={() => setFlscreen(!flscreen)}>
                {flscreen ? <FiMinimize2 /> : <FiMaximize2 />}
              </Button>
            </Grid>
            <Grid item xs={1} md={1} align={"left"}>
              <Button onClick={() => props.setShowModal(false)}>
                <AiOutlineCloseCircle size={"1.5rem"} />
              </Button>
            </Grid>
            
          </Grid>
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </>
  );
};

export default AntModal;
