import React,{ useContext, useEffect } from "react";
import { BsClockHistory } from "react-icons/bs";
import { historyQuationCount } from "./otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { UserDetail } from "@/helper/context/userContext";

export function HistoryAction({ userId }) {
  const { historyCounter ,setHistoryCounter} = useContext(UserDetail);
  const cont = historyQuationCount(userId);
  useEffect(() => {
    setHistoryCounter( cont ) 
}, [cont])
  return (
    <>
      <BadgeBtn
        variant={"contained"}
        startIcon={<BsClockHistory />}
        count={historyCounter}
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}

        xcolor={"common"}
        iconcolor={"warning.light"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        // onClick={() => {
        //   setdataToshow("/category");
        //   setOpenGroups(true);
        //   setTypeOfShow("all");
        // }}
        toolTip="History  Question you Wach It"
      />
    </>
  );
}
