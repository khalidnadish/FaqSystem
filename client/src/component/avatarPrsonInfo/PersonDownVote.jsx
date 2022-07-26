


import { BiDownvote } from "react-icons/bi";
import BadgeBtn from '../badgeBtn/BadgeBtn';

 const PersonDownVote=({}) =>{
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<BiDownvote />}
    count={"-1"}
    xpad={"3px 10px 3px 10px"}
    // xcolor={"error"}
    xcolor={"common"}
    iconcolor={"error.dark"}
    xborder={0}
    xdisableElevation={true}
    TypographyVariant="button"
    TypographyColor="primary.main"
    // xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
}
export default PersonDownVote
