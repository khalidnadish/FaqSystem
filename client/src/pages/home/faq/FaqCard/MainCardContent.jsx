import React, { useState, Suspense } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AddToFavorite } from "./AddToFavorite";
import { ReplayCounter } from "./ReplayCounter";
import { GroupInfo } from "./GroupInfo";
import { QuastionCounter } from "./QuastionCounter";
import { ShowAnsewr } from "./ShowAnsewr";
import CardId from "./CardId";
import { QuastionStuts } from "./QuastionStuts";
import { Loader, AnswerDrawer } from "./FaqCards";

export function MainCardContent({
  userid,
  Quastion,
  faqid,
  faqGroup,
  rowIndex,
  answerCount,
  Groupid,
  faqcolseoropen,
}) {
  const [showReplyDrawer, setShowReplyDrawer] = useState(false);
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6} align="left">
             
              <QuastionCounter rowIndex={rowIndex} />
              <GroupInfo faqGroup={faqGroup} />
              <CardId userid={userid} groupid={Groupid} qid={faqid} />
           
          </Grid>

          <Grid item xs={6} align="right">
            <Grid container>
              <Grid item xs={7}>
                <AddToFavorite />
              </Grid>
              <Grid item xs={2}>
                <ReplayCounter answerCount={answerCount} />
              </Grid>
              <Grid item xs={2}>
                <QuastionStuts status={faqcolseoropen} />
              </Grid>
            </Grid>
            {/* <FollowAuther /> */}
          </Grid>
        </Grid>
      </Box>
      <ShowAnsewr setShowReplyDrawer={setShowReplyDrawer} Quastion={Quastion} userid={userid} groupid={Groupid} qid={faqid} />
      {showReplyDrawer && (
        <Suspense fallback={<Loader />}>
          <AnswerDrawer
            open={showReplyDrawer}
            setOpen={setShowReplyDrawer}
            faqid={faqid}
          />
        </Suspense>
      )}
    </>
  );
}