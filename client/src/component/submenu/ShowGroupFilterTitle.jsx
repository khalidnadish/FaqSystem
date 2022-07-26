import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import BoxInfo from "../BoxInfo/BoxInfo";
import { Typography } from "@mui/material";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function ShowGroupFilterTitle({ titleName }) {
  return (

<>
 

<BadgeBtn
        variant={"contained"}
        startIcon={<FaLayerGroup style={{margin:"0px"}}/>}
        count={titleName}
        xpad={"3px 10px 3px 10px"}
        xcolor={"common"}
        iconcolor={"success.dark"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        // onClick={() => {
        //   setdataToshow("/category");
        //   setOpenGroups(true);
        //   setTypeOfShow("all");
        // }}
        toolTip="Group Selected "
      />

   



    



</>
  );
}
