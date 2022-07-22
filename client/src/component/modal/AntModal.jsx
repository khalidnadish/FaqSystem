import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: "30vh",
  bgcolor: "background.paper",
  border: "3px solid ",
  boxShadow: 24,
  borderRadius: "8px",
  borderColor: "warning.main",
};

const AntModal = ({
  showModal,
  setShowModal,
  children,
  avatarSrc,
  username,
  cr_date,
  userid,
}) => {
  return (
    <>
    {/* import Draggable from 'react-draggable'; */}
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        scroll={'paper'}
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
        <DialogTitle sx={{ display: "flex", flexDirection: "row" ,alignItems:"center",justifyContent:"space-between"}}>
          <Avatar
            src={avatarSrc}
            sx={{
              width: "50px",
              height: "50px",
              // position: "absolute",
              // top: "-15px",
              // left: "55px",
              border: "7px solid white",
              zIndex: "10000",
            }}
          />

            <Box sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
          <Typography variant="body1" >{username}</Typography>
          <Typography variant="body2">

            {new Date(cr_date).toLocaleDateString()}{" "}
          </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
            <DialogActions disableSpacing={true}>
              <Button onClick={() => setShowModal(false)}>Close</Button>
              
            </DialogActions>
      </Dialog>

    </>
  );
};

export default AntModal;
