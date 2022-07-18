import BadgeBtn from '../badgeBtn/BadgeBtn';
import { GiShadowFollower } from "react-icons/gi";


const  PersonFollowing = ({ following }) => {
  return (
<BadgeBtn
    variant={"contained"}
    startIcon={<GiShadowFollower />}
    count={following}
    xpad={"3px 10px 3px 10px"}
    xcolor={"success"}
    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="following"
  />
  );
};
export default PersonFollowing
