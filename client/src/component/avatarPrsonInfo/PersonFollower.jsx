import "antd/dist/antd.css";
import BadgeBtn from '../badgeBtn/BadgeBtn';

import { MdFollowTheSigns } from "react-icons/md";

 const PersonFollower=({ follower }) =>{
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<MdFollowTheSigns />}
    count={follower}
    xpad={"3px 10px 3px 10px"}
    xcolor={"success"}
    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Followers"
  />

   
  );
}
export default PersonFollower

// GRUB_CMDLINE_LINUX="nouvean.modeset=0"