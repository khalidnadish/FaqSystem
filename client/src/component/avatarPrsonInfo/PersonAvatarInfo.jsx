import  Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';


import BadgeBtn from '../badgeBtn/BadgeBtn';
import QuickreplyIcon from "@mui/icons-material/Quickreply";
const  PersonAvatarInfo=({Username, joinindDate})=> {
  return (
    <>
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
      <Typography variant="body1" >
        {Username}  
         
      
         
      </Typography>
      <Typography variant="caption"> {new Date(joinindDate).toDateString()} </Typography>
      
    </Box>
    
    </>
  );
}
export default PersonAvatarInfo