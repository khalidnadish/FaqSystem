import { GoCommentDiscussion } from "react-icons/go";
import BadgeBtn from "../badgeBtn/BadgeBtn";
export function ShowGroupFilterCounter({ conter }) {
  return (
    <>


<BadgeBtn
        variant={"contained"}
        startIcon={<GoCommentDiscussion style={{margin:"0px"}}/>}
        count={conter}
        xpad={"3px 10px 3px 10px"}
        xcolor={"common"}
        iconcolor={"primary.dark"}
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
