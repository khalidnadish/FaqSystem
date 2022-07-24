import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AntModal = ({
  showModal,
  setShowModal,
  children,
  avatarSrc,
  username,
  cr_date,
  count,
  title,
  prefix1
}) => {
  return (
    <>
      {/* TODO: import Draggable from 'react-draggable'; */}
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        // fullScreen
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
                src={avatarSrc}
                sx={{
                  width: "55px",
                  height: "55px",
                  border: "3px solid white",
                }}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={8} align="left">
            <Typography align="left" variant="body1">{title}</Typography>
             
            </Grid>
            <Grid item xs={2}>
             
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions
          disableSpacing={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "primary.light",
            padding: 0.5,
          }}
        >
         <Typography color={"lightgray"} ml={2}>{count} {prefix1} </Typography>
         
          <Button
            sx={{ color: "background.paper" }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AntModal;
