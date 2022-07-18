 
import { Badge } from 'antd';
import  Tooltip  from '@mui/material/Tooltip';
 
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import "antd/dist/antd.css";
import { Chip } from '@mui/material';
const  PersonAnswers=({  answer })=> {
  return (
    <Badge
      
      count={answer}
      offset={[-10, 1]}
      status="blue"
    >
      <Tooltip title="Reply count">
        <Chip
          color="info"
          size="large"
          variant="outlined"
          icon={<QuickreplyIcon size={25}/>}
          label="A" 

          sx={{
            padding:"10px",
            "& .MuiChip-label": {
              color: "info.main",
              fontSize:"1rem",
              padding:"5px",
              margin:"5px"
            }
          }}
        >
        
        </Chip>
      </Tooltip>
    </Badge>
  );
}
export default PersonAnswers;