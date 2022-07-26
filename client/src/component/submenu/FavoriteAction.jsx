import { MdOutlineFavorite } from "react-icons/md";
import { favoriteQuationCount } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";
export function FavoriteAction({ userId }) {
  const cont=  favoriteQuationCount(userId)
  return (
    <>

<BadgeBtn
        variant={"contained"}
        startIcon={<MdOutlineFavorite style={{margin:"0px"}}/>}
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
