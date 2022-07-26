
import  Chip  from '@mui/material/Chip';

import { BiUpvote } from "react-icons/bi";
import BadgeBtn from '../badgeBtn/BadgeBtn';

 const PersonVote=({}) =>{
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<BiUpvote />}
    count={"+1"}
    xpad={"3px 10px 3px 10px"}
    // xcolor={"success"}
    xcolor={"common"}
    iconcolor={"success.dark"}
    xborder={0}
    xdisableElevation={true}
    TypographyVariant="button"
    TypographyColor="primary.main"


    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
}
export default PersonVote
