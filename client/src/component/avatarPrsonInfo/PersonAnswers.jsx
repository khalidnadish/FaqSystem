import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BadgeBtn from "../badgeBtn/BadgeBtn";

const PersonAnswers = ({ answer }) => {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={<QuickreplyIcon />}
      count={answer}
      xpad={"3px 10px 3px 10px"}
      xcolor={"success"}
      xborderColor="primary.light"
      onClick={() => setShowModal(true)}
      toolTip="Answer's Create"
    />
  );
};
export default PersonAnswers;
