import { AiOutlineUserSwitch } from "react-icons/ai";
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
        startIcon={<AiOutlineUserSwitch />}
        count={cont}
        xpad={"3px 10px 3px 10px"}
        xcolor={"warning"}
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
