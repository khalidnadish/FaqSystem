import {useState} from 'react'
import { Badge } from 'antd';
import "antd/dist/antd.css";
import  Tooltip   from '@mui/material/Tooltip';
import { VscLayersActive } from "react-icons/vsc";
import AntModal from '../modal/AntModal';
import ShowGroupData from './ShowGroupData';
import { Chip } from '@mui/material';
import { fontSize, margin, padding } from '@mui/system';
const PersonGroup=({category,avatarSrc,username,cr_date })=> {
  console.log(avatarSrc,username,cr_date )

  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <Badge   count={category} offset={[-10, 1]} status="success">
      <Tooltip title="Group Joining">
        <Chip
          color="success"
          onClick={() => setShowModal(true)}
          icon={<VscLayersActive size={25}/>}
          label="G"
          variant="outlined"
          
          
          sx={{
            padding:"10px",
            "& .MuiChip-label": {
              color: "success.main",
              fontSize:"1rem",
              padding:"5px",
              margin:"5px"
            }
          }}
           
        />
          
         
      </Tooltip>
    </Badge>
    {showModal && <AntModal setShowModal={setShowModal} showModal={showModal} >
      <ShowGroupData avatarSrc={avatarSrc} username={username} cr_date={cr_date} />
      </AntModal>}
    </>
  );
}
export default PersonGroup
