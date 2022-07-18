
import { Badge } from 'antd';
import  Chip  from '@mui/material/Chip';
import "antd/dist/antd.css";

 const PersonFollower=({ follower }) =>{
  return (
    <Badge   count={follower} offset={[0, 0]} status="blue">
      <Chip
        color="primary"
       
        sx={{
          padding:"10px",
          "& .MuiChip-label": {
            color: "background.paper",
            fontSize:"1rem",
            padding:"5px",
            margin:"5px"
          }
        }}
         
        label={`Followers`}
      />
    </Badge>
  );
}
export default PersonFollower

// GRUB_CMDLINE_LINUX="nouvean.modeset=0"