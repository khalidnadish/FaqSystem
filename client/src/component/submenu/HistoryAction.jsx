import { BsClockHistory } from "react-icons/bs";
import { favoriteQuationCount } from "./otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";
export function HistoryAction({ userId }) {
  const cont=  favoriteQuationCount(userId)
  return (
    <>

<BadgeBtn
        variant={"contained"}
        startIcon={<BsClockHistory />}
        count={cont}
        xpad={"3px 10px 3px 10px"}
        xcolor={"warning"}
        // onClick={() => {
        //   setdataToshow("/category");
        //   setOpenGroups(true);
        //   setTypeOfShow("all");
        // }}
        toolTip="Favorite Question"
      />

      </>
  );
}
