
import  Chip  from '@mui/material/Chip';

import { BiUpvote } from "react-icons/bi";
import BadgeBtn from '../badgeBtn/BadgeBtn';

 const PersonVote=({}) =>{
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<BiUpvote />}
    count={"xxx"}
    xpad={"3px 10px 3px 10px"}
    xcolor={"success"}
    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
}
export default PersonVote
