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
        startIcon={<VscLayersActive  size={'1.3em'} />}
        count={cont}
        xpad={"3px 5px 3px 5px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"primary.light"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"




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
