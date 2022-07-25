import { useState } from "react";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { MdFollowTheSigns } from "react-icons/md";
import AntModal from "../modal/AntModal";
import ShowFollowerData from "./ShowFollowerData";

const PersonFollower = ({ follower,userid, avatarSrc, username, cr_date }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BadgeBtn
        variant={"contained"}
        startIcon={<MdFollowTheSigns />}
        count={follower}
        xpad={"3px 10px 3px 10px"}
        xcolor={"success"}
        xborderColor="primary.light"
        onClick={() => setShowModal(true)}
        toolTip="Followers"
      />
      {showModal && (
        <AntModal
          setShowModal={setShowModal}
          showModal={showModal}
          username={username}
          cr_date={cr_date}
          userid={userid}
          avatarSrc={avatarSrc}
          count={follower}
          title={`${username}  Follower's ${follower}  Follower `}
          prefix1={"Follower's"}
          xcolor={"primary.dark"}
        >
          <ShowFollowerData
            avatarSrc={avatarSrc}
            username={username}
            cr_date={cr_date}
            userid={userid}
          />
        </AntModal>
      )}
    </>
  );
};
export default PersonFollower;
