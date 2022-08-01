import React,{ useContext, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { PepoleYouFollowing } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { UserDetail } from "@/helper/context/userContext";

export function PepoleYouTrackAction({
  setOpenUsers,
  userId,
  setdataToshow,
  setTypeOfShow,
}) {
  const { followerCounter ,setFollowerCounter} = useContext(UserDetail);
  const cont = PepoleYouFollowing(userId);
  // alert("ff  " +cont)
  
useEffect(() => {
     setFollowerCounter( cont ) 
}, [cont])


  return (
    <>



    <BadgeBtn
        variant={"contained"}
        startIcon={<FaUsers />}
        count={followerCounter}
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"primary.main"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        onClick={() => {
          setOpenUsers(true);
          setdataToshow(`/user/showflower/${userId}`);
          setTypeOfShow("following");
        }}
        toolTip="following"
      />
    </>
  );
}
