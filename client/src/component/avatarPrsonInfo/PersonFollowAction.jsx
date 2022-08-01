import { useState,useContext } from "react";
import BadgeBtn from "../badgeBtn/BadgeBtn";
import { MdFollowTheSigns } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import { axios } from "../../helper/axios/axios";
import { UserDetail } from "../../helper/context/userContext";
import { PepoleYouFollowing } from "../../component/submenu/otherNavService";

const PersonFollowAction = ({ isYoufollowed, targetUserid, userId,setFollowingTarget }) => {
  const {  setFollowerCounter } = useContext(UserDetail);
  const [action, setAction] = useState(isYoufollowed);
  const [reCheckFlower,setReCheckFlower]=useState(0)


  const reCheckTargetFollowacounter = async (targetUserid) => {
    try {
      const resposn = await axios.get(`/user/PepoleFollowinYouCount/${targetUserid}`);
      if (resposn) {
          setFollowingTarget(resposn.data[0].PepoleYouFollow)
        }
    } catch (error) {
      console.log("FollowUser Error :", error);
    }
  };


  const reCheckFollowacounter = async (userId) => {
    try {
      const resposn = await axios.get(`/user/PepoleYouFollow/${userId}`);
      if (resposn) {
         setFollowerCounter(resposn.data[0].PepoleYouFollow);
         
        }
    } catch (error) {
      console.log("FollowUser Error :", error);
    }
  };




  const Followaction = async (userId, targetUserid) => {
    try {
      const resposn = await axios.post(
        `person/FollowUser/${userId}/${targetUserid}`
      );
      if (resposn) {
        setAction(1);
        reCheckFollowacounter(userId)
        reCheckTargetFollowacounter(targetUserid)
      }
    } catch (error) {
      console.log("FollowUser Error :", error);
    }
  };

  const UnFollowaction = async (userId, targetUserid) => {
    try {
      const resposn = await axios.delete(
        `person/UnFollowUser/${userId}/${targetUserid}`
      );
      if (resposn) {
        setAction(0);
        reCheckFollowacounter(userId)
        reCheckTargetFollowacounter(targetUserid)
      }
    } catch (error) {
      console.log("UnFollowUser Error :", error);
    }
  };

  const handleFollowAction = (actionType, targetUserid, userId) => {
   
    actionType === 0
      ?( Followaction(userId, targetUserid))
      : (UnFollowaction(userId, targetUserid));
      // reCheckFollowacounter(userId)     
      
   
      // setThemeMode(5)
  };

// useEffect(() => {
// //  alert(reCheckFlower)
//   // reCheckFollowacounter(userId)    
//   // setFollowerCounter(18000);
// }, [reCheckFlower])



  return (
    <BadgeBtn
      variant={"contained"}
      startIcon={action === 0 ? <MdFollowTheSigns /> : <RiUserUnfollowLine />}
      count={action === 0 ? "Follow" : "UnFollow"}
      xpad={"3px 10px 3px 10px"}
      xcolor={"common"}
      iconcolor={action === 0 ? "primary.dark" : "error.dark"}
      xborder={0}
      xdisableElevation={true}
      TypographyVariant="caption"
      TypographyColor="primary.main"
      TypographySize=".5rem"
      onClick={() => {
        handleFollowAction(action, targetUserid, userId);
      }}
      toolTip={isYoufollowed === 0 ? "Follow User" : "UnFollow User"}
      xborderColor="primary.light"
    />
  );
};
export default PersonFollowAction;
