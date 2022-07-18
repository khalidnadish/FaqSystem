import IconButton from "@mui/material/IconButton/IconButton";

function IconButtonComponent({ children, onClick }) {
  return (
    <IconButton
      size="small"
      color="primary"
      variant="outlined"
      sx={{
        color: "background.paper",
        bgcolor: "primary.light",
      }}
    >
      {children}
    </IconButton>
  );
}

export default IconButtonComponent;
