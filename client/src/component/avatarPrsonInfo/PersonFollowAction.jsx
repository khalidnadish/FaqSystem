import BadgeBtn from "../badgeBtn/BadgeBtn";
import { MdFollowTheSigns } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";

const PersonFollowAction = ({isYoufollowed}) => {
  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={isYoufollowed === 0 ? <MdFollowTheSigns /> : <RiUserUnfollowLine  />}
      count={isYoufollowed === 0 ?"Follow" :"UnFollow"  }
      xpad={"3px 10px 3px 10px"}
      // xcolor={isYoufollowed === 0 ? "primary": "warning"}

      xcolor={"common"}
      iconcolor={ isYoufollowed === 0 ? "primary.dark" :"error.dark"  }
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
      toolTip={isYoufollowed === 0 ?"Follow User" :"UnFollow User"  }
       


      
      xborderColor="primary.light"
      // onClick={() => setShowModal(true)}
      // toolTip="Answer's Create"
    />
  );
};
export default PersonFollowAction;
