


import { BiDownvote } from "react-icons/bi";
import BadgeBtn from '../badgeBtn/BadgeBtn';

 const PersonDownVote=({}) =>{
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<BiDownvote />}
    // count={"XXX"}
    xpad={"3px 10px 3px 10px"}
    xcolor={"error"}
    // xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
}
export default PersonDownVote
