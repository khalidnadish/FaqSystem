import  Chip from '@mui/material/Chip';
import { Badge } from "antd";
import "antd/dist/antd.css";
const  PersonFollowing = ({ following }) => {
  return (
    <Badge  count={following} offset={[0, 0]} status="blue">
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
        label={`Following`}
      />
    </Badge>
  );
};
export default PersonFollowing
