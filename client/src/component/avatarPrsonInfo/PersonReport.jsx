import  Chip  from '@mui/material/Chip';
import BadgeBtn from '../badgeBtn/BadgeBtn';

import { SiAdblock } from "react-icons/si";


const PersonReport = ({}) => {
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<SiAdblock />}
    count={"Report"}
    xpad={"3px 10px 3px 10px"}
    xcolor={"error"}
    // xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
};
export default PersonReport
