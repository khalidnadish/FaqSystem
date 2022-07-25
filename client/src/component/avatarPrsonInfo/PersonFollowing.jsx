import { useState } from "react";
import BadgeBtn from '../badgeBtn/BadgeBtn';
import { GiShadowFollower } from "react-icons/gi";
import AntModal from "../modal/AntModal";
import ShowFollowingData from "./ShowFollowingData";
const  PersonFollowing = ({ following ,userid, avatarSrc, username, cr_date}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
<BadgeBtn
    variant={"contained"}
    startIcon={<GiShadowFollower />}
    count={following}
    xpad={"3px 10px 3px 10px"}
    xcolor={"success"}
    xborderColor="primary.light"
    onClick={() => setShowModal(true)}
    toolTip="following"
  />
{showModal && (
        <AntModal
          setShowModal={setShowModal}
          showModal={showModal}
          username={username}
          cr_date={cr_date}
          userid={userid}
          avatarSrc={avatarSrc}
          count={following}
          title={`${username}  Follower's ${following}  Follower `}
          prefix1={"Follower's"}
          xcolor={"primary.dark"}
        >
          <ShowFollowingData
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
export default PersonFollowing
