import React, { useState, lazy } from "react";
import Card from "@mui/material/Card";
import { MainCardHeader } from "./MainCardHeader";
import { MainCardContent } from "./MainCardContent";


export const LeftDrawer = lazy(() => import("@/component/leftDrawer/LeftDrawer"));
export const AnswerDrawer = lazy(() => import("../ShowFaqAnswer/AnswerDrawer"));
export const Loader = lazy(() => import("../../../../component/loader/Loader"));
const FaqAnswerId = lazy(() => import("../FaqAnswerId"));
export const AvatarPrsonInfo = lazy(() =>
  import("@/component/avatarPrsonInfo/AvatarPrsonInfo")
);

export default function FaqCrads({
  userid,
  Quastion,
  src,
  count,
  faqid,
  autherName,
  create_at,
  faqGroup,
  rowIndex,
  Groupid,
  faqcolseoropen
}) {

  
  const cardStyle = {
    width: "99%",
    border: `1.5px solid`,
    borderColor: "primary.light",
    borderRadius: "4px",
    // bgcolor:"red"
   
  };

  return (
    <>
      <Card sx={cardStyle}>
        <MainCardHeader
          src={src}
          autherName={autherName}
          create_at={create_at}
          faqGroup={faqGroup}
          faqid={faqid}
          userid={userid}
          faqcolseoropen={faqcolseoropen}
        />

        <MainCardContent
          Quastion={Quastion}
          faqid={faqid}
          faqGroup={faqGroup}
          Groupid={Groupid}
          rowIndex={rowIndex}
          userid={userid}
          answerCount={count}
          faqcolseoropen={faqcolseoropen}
        />
      </Card>
    </>
  );
}


