
import { AiOutlineAim } from "react-icons/ai";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function QuastionYouLikeAction({ }) {
  const cont=  "xxx"
  return (
    <>
<BadgeBtn
        variant={"contained"}
        startIcon={<AiOutlineAim />}
        count={cont}
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"error.main"}
        xborder={0}

        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        // onClick={() => {
        //   setOpenUsers(true);
        //   setdataToshow(`/user/showWhosFollowing/${userId}`);
        //   setTypeOfShow("Followers");
        // }}
        toolTip="you may Like It.."
      />
    </>
  );
}
