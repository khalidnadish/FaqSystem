import { GiShadowFollower } from "react-icons/gi";

import { pepleFollowingYou } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function PeopleFollowYou({
  setOpenUsers, userId, setdataToshow, setTypeOfShow,
}) {
  const cont=  pepleFollowingYou(userId)
  return (
    <>
<BadgeBtn
        variant={"contained"}
        startIcon={<GiShadowFollower />}
        count={cont }
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"error.main"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"


        onClick={() => {
          setOpenUsers(true);

          setdataToshow(`/user/showWhosFollowing/${userId}`);

          setTypeOfShow("Followers");
        }}
        toolTip="Followers"
      />
    </>
  );
}
