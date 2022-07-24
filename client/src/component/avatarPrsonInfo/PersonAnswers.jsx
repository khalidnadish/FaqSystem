import { useState } from "react";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import ShowAnsweredDetail from "./ShowAnsweredDetail";
import AnswerDailog from "../modal/AnswerDailog";
const PersonAnswers = ({ answer ,userid, avatarSrc, username, cr_date }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
    {showModal && (
      <AnswerDailog
        setShowModal={setShowModal}
        showModal={showModal}
        username={username}
        cr_date={cr_date}
        userid={userid}
        avatarSrc={avatarSrc}
        // count={category}
        // title={`${username}  join ${category}  Groups `}
        // prefix1={"Group's"}
      >
        <ShowAnsweredDetail
          avatarSrc={avatarSrc}
          username={username}
          cr_date={cr_date}
          userid={userid}
        />
      </AnswerDailog>
    )}

</>
  );
};
export default PersonAnswers;
