import { FaUsers } from "react-icons/fa";
import { QuastionFromPepoleYouFollow } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function PepoleYouTrackAction({
  setOpenUsers, userId, setdataToshow, setTypeOfShow,
}) {
  const cont=  QuastionFromPepoleYouFollow(userId)
  return (
    <>
<BadgeBtn
        variant={"contained"}
        startIcon={<FaUsers />}
        count={cont}
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
