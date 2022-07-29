
 
import { IoIosPaperPlane } from "react-icons/io";
import BadgeBtn from "../badgeBtn/BadgeBtn";
const PersonDirectMsg=({})=> {
  return (
    <BadgeBtn
    variant={"contained"}
    startIcon={<IoIosPaperPlane />}
    count={"Direct Msg" }
    // count={answer}
    xpad={"3px 10px 3px 10px"}
    // xcolor={"primary"}
    xcolor={"common"}
    iconcolor={"primary.dark"}
    xborder={0}
    xdisableElevation={true}
    TypographyVariant="caption"
    TypographyColor="primary.main"
    TypographySize=".5rem"
    
    // onClick={() => {
    //   setdataToshow("/category");
    //   setOpenGroups(true);
    //   setTypeOfShow("all");
    // }}
    // toolTip={isYoufollowed === 0 ?"Follow User" :"UnFollow User"  }



    xborderColor="primary.light"
    // onClick={() => setShowModal(true)}
    toolTip="Send Direct msg"
  />
  );
}

export default PersonDirectMsg
