import { FaMugHot } from "react-icons/fa";
import BadgeBtn from "../badgeBtn/BadgeBtn";

export function MostQuastionViewed({}) {
  return (
    <>
      <BadgeBtn
        variant={"contained"}
        startIcon={<FaMugHot />}
        count={"xx"}
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"grey.500"}
        xborder={0}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"





        // onClick={() => {
        //   setdataToshow(`/category/getUserCategory/${userId}`);

        //   setOpenGroups(true);
        //   setTypeOfShow("tracking");
        // }}
        toolTip="Most populer Question"
      />
    </>
  );
}
