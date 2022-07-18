import { GoCommentDiscussion } from "react-icons/go";
import BadgeBtn from "../badgeBtn/BadgeBtn";

const PersonQuastions = ({ quastion }) => {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={<GoCommentDiscussion />}
      count={quastion}
      xpad={"3px 10px 3px 10px"}
      xcolor={"success"}
      xborderColor="primary.light"
      onClick={() => setShowModal(true)}
      toolTip="Quastion Create"
    />
  );
};
export default PersonQuastions;
