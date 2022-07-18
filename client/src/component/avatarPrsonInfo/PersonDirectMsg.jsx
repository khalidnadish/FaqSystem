
 
import { IoIosPaperPlane } from "react-icons/io";
import BadgeBtn from "../badgeBtn/BadgeBtn";
const PersonDirectMsg=({})=> {
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<IoIosPaperPlane />}
    // count={answer}
    xpad={"3px 10px 3px 10px"}
    xcolor={"primary"}
    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Answer's Create"
  />
  );
}

export default PersonDirectMsg
