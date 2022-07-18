import  Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';

const  PersonAvatarInfo=({Username, joinindDate})=> {
  return (
    <Box
      sx={{
        postion: "absolute",
        top: "10px",
        right: "10px",
        bgcolor: "warning.main",
        color: "background.paper",
        padding: "3px",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start"
        
        
      }}
    >
      <Typography variant="body2" >{Username}</Typography>
      <Typography variant="caption"> {new Date(joinindDate).toDateString()} </Typography>
    </Box>
  );
}
export default PersonAvatarInfo