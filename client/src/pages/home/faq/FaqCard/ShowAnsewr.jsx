import React,{ useContext, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { axios } from "../../../../helper/axios/axios";
import { UserDetail } from "@/helper/context/userContext";

export function ShowAnsewr({ setShowReplyDrawer, Quastion,userid,groupid,qid }) {
  const {userId,setHistoryCounter} = useContext(UserDetail);

  const reCheckHistorycounter = async (userId) => {
    try {
      const resposn = await axios.get(`/user/histoyQuastionCount/${userId}`);
      if (resposn) {
        setHistoryCounter(resposn.data[0].historyQ);
      }
    } catch (error) {
      console.log("FollowUser Error :", error);
    }
  };
  
  
  const addToHistoy=async (userId,qid,groupid)=>{
  // TODO: check if Exisit beoe add


  try {
    const resposn = await axios.post(`user/addToHistory`,{userId,qid,groupid});
    if (resposn) {
      
      reCheckHistorycounter(userId)
    
    }
  } catch (error) {
    console.log("History Error :", error);
  }

 }



  return (
    <Tooltip title="click to see Answer's">
      <CardContent
        onClick={() => {
          addToHistoy(userId,qid,groupid)
          setShowReplyDrawer(true);
        }}
        sx={{
          cursor: "pointer",
          "&:hover": {
            borderBottom: "5px solid",
            borderColor: "warning.dark",
            backgroundColor: "primary.dark",

            color: "background.paper",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Typography
          sx={{
            wordBreak: "break-word"
          }}
        >
          {Quastion}
        </Typography>
      </CardContent>
    </Tooltip>
  );
}
