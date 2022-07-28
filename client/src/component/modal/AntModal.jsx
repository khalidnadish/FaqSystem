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
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";


const Dtitle= 
  {
    color: "background.paper",
    boxShadow: 24,
    borderTop: "7px solid",
     // borderColor: props.xcolor,
  }


 
const AntModal = ({ ...props }) => {
  const [flscreen, setFlscreen] = useState(false);
  return (
    <>
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
              minWidth: "300px",  // Set your width here
            },
          },
        }}



      >
        <DialogTitle id="draggable-dialog-title" sx={Dtitle}>
          <Grid container alignItems={"center"}>
            <Grid item xs={2} sm={2} md={2} align="center">
              {/* {props.avatarSrc && ( */}
              <AvatarControl
                ximg={props.avatarSrc}
                xicon={props.iconToShow}
                xTitle={props.title}
              />
              {/* )} */}
            </Grid>

            <Grid item xs={8} md={8} align="center">
              <MiddleText xcount={props.count} xprefix={props.prefix1} />
            </Grid>

            <Grid item xs={2} md={2} align={"left"}>
              <Box display={"flex"}>
                <Button
                  sx={{
                    border: "1px solid",
                    padding: 0,
                    display: "flex",
                    minHeight: 0,
                    minWidth: 0,
                    mr: 1,
                  }}
                  onClick={() => setFlscreen(!flscreen)}
                >
                  {flscreen ? (
                    <FiMinimize2 size={"1.4rem"} />
                  ) : (
                    <FiMaximize2 size={"1.4rem"} />
                  )}
                </Button>

                <Button
                  sx={{
                    border: "1px solid",
                    padding: 0,
                    display: "flex",
                    minHeight: 0,
                    minWidth: 0,
                  }}
                  onClick={() => props.setShowModal(false)}
                >
                  <AiOutlineCloseCircle size={"1.5rem"} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>

      {/* </Draggable> */}
    </>
  );
};

export default AntModal;

   

    function AvatarControl({ ximg , xicon, xTitle}) {
      return (
        <Box
          sx={{
            border: "1px solid ",
            borderColor: "grey.300",
            borderRadius: 1,
            diplay: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "auto",
          }}
        >
          <Avatar
            src={ximg}
            sx={{
              width: "35px",
              height: "35px",
              border: "2px solid white",
              disply: "block",
              margin: "auto",
              bgcolor:"background.paper"
            }}
          >
            {xicon}
          </Avatar>

          <Typography
            color={"primary"}
            variant="caption"
            display="block"
            margin="auto"
          >
            {/* {props.iconText} */}
             {xTitle}
          </Typography>
        </Box>
      );
    }

    function MiddleText({xcount, xprefix }) {
      return (
        <Typography
          display="block"
          align={"center"}
          color={"warning.light"}
          ml={2}
        >
          {xcount} {xprefix}
        </Typography>
      );
    }
      