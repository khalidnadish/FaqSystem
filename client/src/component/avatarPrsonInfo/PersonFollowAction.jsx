import BadgeBtn from "../badgeBtn/BadgeBtn";
import { MdFollowTheSigns } from "react-icons/md";
const PersonFollowAction = ({}) => {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={<MdFollowTheSigns />}
      // count={answer}
      xpad={"3px 10px 3px 10px"}
      xcolor={"primary"}
      
      xborderColor="primary.light"
      // onClick={() => setShowModal(true)}
      toolTip="Answer's Create"
    />
  );
};
export default PersonFollowAction;
