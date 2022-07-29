import React from "react";
import Button from "@mui/material/Button";

import { BsFillEyeFill } from "react-icons/bs";
import BadgeBtn from "../badgeBtn/BadgeBtn";


export function ShowAllButton({ handleShowAllFAQ }) {
  return (

<>
<BadgeBtn
        variant={"contained"}
        startIcon={<BsFillEyeFill style={{margin:"0px"}}/>}
        count={""}
        xpad={"3px 10px 3px 10px"}
        xcolor={"common"}
        iconcolor={"error.dark"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="caption"
        TypographyColor="primary.main"
        onClick={() => {
          handleShowAllFAQ()
        }}
        toolTip="Show all"
      />






    
  </>
  );
}
