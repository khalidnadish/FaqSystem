import { FaLayerGroup } from "react-icons/fa";
import { GroupCount } from "../../component/submenu/otherNavService";
import BadgeBtn from "../badgeBtn/BadgeBtn";

const iconStyle = {
  width: { xs: "14px", md: "25px" },
  height: { xs: "14px", md: "25px" },
  marginLeft: { xs: "1px", md: "2px" },
};

export function AllGroup({ setOpenGroups, setdataToshow, setTypeOfShow }) {
  const cont = GroupCount();
  return (
    <>
    
      <BadgeBtn
        variant={"contained"}
        startIcon={
          <FaLayerGroup
          size={'1em'}
          />
        }
        count={cont}
        xpad={"3px 10px 3px 10px"}
        xcolor={"warning"}
        onClick={() => {
          setdataToshow("/category");
          setOpenGroups(true);
          setTypeOfShow("all");
        }}
        toolTip="WorkSpace You Track"
      />
    </>
  );
}
