
import Tooltip from '@mui/material/Tooltip';
import { Badge } from 'antd';
import { GoCommentDiscussion } from "react-icons/go";
import "antd/dist/antd.css";
 
import { Chip } from '@mui/material';





 const PersonQuastions = ({  quastion }) => {
  return (
    <Badge
      
      count={quastion}
      offset={[-10, 1]}
      status="primary"
    >
      <Tooltip title="Posted Msg">
        <Chip
          color="warning"
          size="large"
          variant="outlined"
          icon={<GoCommentDiscussion size={25}/>}
          label="Q" 


          sx={{
            padding:"10px",
            "& .MuiChip-label": {
              color: "warning.main",
              fontSize:"1rem",
              padding:"5px",
              margin:"5px"
            }
          }}
        />
          
         
      </Tooltip>
    </Badge>
  );
};
export default PersonQuastions
