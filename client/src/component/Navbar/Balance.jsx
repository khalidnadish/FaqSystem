import React from "react";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { BsCoin } from "react-icons/bs";

export function Balance({ }) {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={<BsCoin />}
      count={"15051"}
      xpad={"3px 10px 3px 10px"}
      xcolor={"primary"}
      xborderColor="primary.light" // onClick={() => setShowModal(true)}
      toolTip="Balance Click To show Statment" />
  );
}
