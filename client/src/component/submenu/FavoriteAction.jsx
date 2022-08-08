import { useContext, useEffect, useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { favoriteQuationCount } from "../../component/submenu/otherNavService";
import { UserDetail } from "@/helper/context/userContext";
import { axios } from "@/helper/axios/axios";

import BadgeBtn from "../badgeBtn/BadgeBtn";

export function FavoriteAction({ userId }) {
  // let cont=  favoriteQuationCount(userId)
  const { forceRenderToggole } = useContext(UserDetail);
  const [cont, setCont] = useState(0);

  const favoriteQuationCount1 = async (userId) => {
    try {
      const resposn = await axios.get(`/faq/favoriteQuation/${userId}`);
      if (resposn) {
        setCont(resposn.data[0].favoritequation);
        alert(resposn[0].favoritequation);
      }
    } catch (error) {
      console.log("favorte Error :", error);
    }
  };
  useEffect(() => {
    favoriteQuationCount1(userId);
  }, [forceRenderToggole, cont]);

  return (
    <>
      <BadgeBtn
        variant={"contained"}
        startIcon={<MdOutlineFavorite style={{ margin: "0px" }} />}
        count={cont}
        xpad={"3px 10px 3px 10px"}
        xcolor={"common"}
        iconcolor={"error.dark"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
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
