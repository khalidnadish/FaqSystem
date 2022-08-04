import React from "react";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BadgeBtn from "../../../../component/badgeBtn/BadgeBtn";
 

export function ReplayCounter({ answerCount }) {
  return (
<>
<BadgeBtn
        variant={"contained"}
        startIcon={<QuickreplyIcon  size={'1.3em'} />}
        count={answerCount}
        xpad={"3px 5px 3px 5px"}
        xcolor={"grey"}
        // xcolor={"common"}
        iconcolor={"primary.light"}
        xborder={0.5}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        direction="row"
        // onClick={() => {
        //   setdataToshow(`/category/getUserCategory/${userId}`);

        //   setOpenGroups(true);
        //   setTypeOfShow("tracking");
        // }}
        toolTip="Answer's"
      />










    </>
  );
}