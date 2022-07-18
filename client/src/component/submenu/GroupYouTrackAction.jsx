import { VscLayersActive } from "react-icons/vsc";
import { GroupCountYouFollow } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function GroupYouTrackAction({
  setOpenGroups,
  setdataToshow,
  userId,
  setTypeOfShow,
}) {
  const cont = GroupCountYouFollow(userId);
  return (
    <>
      <BadgeBtn
        variant={"contained"}
        startIcon={<VscLayersActive />}
        count={cont}
        xpad={"3px 10px 3px 10px"}
        xcolor={"warning"}
        onClick={() => {
          setdataToshow(`/category/getUserCategory/${userId}`);

          setOpenGroups(true);
          setTypeOfShow("tracking");
        }}
        toolTip="WorkSpace You Track"
      />
    </>
  );
}
