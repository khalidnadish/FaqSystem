import React, { useState, lazy, Suspense } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AddToFavorite } from "./AddToFavorite";
import { FollowAuther } from "./FollowAuther";
import { ReplayCounter } from "./ReplayCounter";
import { GroupInfo } from "./GroupInfo";
import { QuastionCounter } from "./QuastionCounter";
import { AddAnswer } from "./AddAnswer";
import { ExtraOptionRule } from "./ExtraOptionRule";
import { ShowAnsewr } from "./ShowAnsewr";

const LeftDrawer = lazy(() => import("@/component/leftDrawer/LeftDrawer"));
const AnswerDrawer = lazy(() => import("../ShowFaqAnswer/AnswerDrawer"));
const Loader = lazy(() => import("../../../../component/loader/Loader"));
const FaqAnswerId = lazy(() => import("../FaqAnswerId"));
const AvatarPrsonInfo = lazy(() =>
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
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleReply = () => {
    setShowAnswer(true);
  };

  const cardStyle = {
    width: "99%",
    border: `.5px solid`,
    borderColor: "primary.light",
    marginBottom: "15px",
    borderRadius: "4px",
    justifyContent: "space-between",
    alignItems: "center",
    height: "calc(100% - 20px)",
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
        />

        <MainCardContent
          Quastion={Quastion}
          faqid={faqid}
          faqGroup={faqGroup}
          rowIndex={rowIndex}
          answerCount={count}
        />
      </Card>
    </>
  );
}

const MainCardHeader = ({ userid, src, autherName, create_at, faqGroup }) => {
  const [avatarInfo, setAvatarInfo] = useState(false);
  const [imageUrl, setImageUrl] = useState(src);
  const fallbackImage = "http://localhost:3001/images/avatar/notExisit.jpg";
  const hadleAvatarClick = () => {
    setAvatarInfo(true);
  };
  const errorHandler = () => {
    setImageUrl(fallbackImage);
  };
  return (
    <>
      <CardHeader
        component="div"
        action={
          <>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0}
            >
              <Grid item xs={2} align="left">
                <IconButton onClick={() => hadleAvatarClick()}>
                  <Avatar
                    src={imageUrl}
                    aria-label="recipe"
                    alt={faqGroup}
                    imgProps={{
                      onError: errorHandler,
                    }}
                    sx={{ width: "30px", height: "30px", marginLeft: "5px" }}
                  />
                </IconButton>
                {userid}
              </Grid>
              <Grid item xs={2} align="left">
                <Grid container direction="column">
                  <Grid item xs={6}>
                    <Typography fontSize={".75rem"}>{autherName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontSize={".5rem"}>
                      {new Date(create_at).toLocaleDateString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
              <Grid item xs={2} align="right">
                <AddAnswer />
              </Grid>

              <Grid item xs={2} align="center">
                <ExtraOptionRule />
              </Grid>
            </Grid>
            {avatarInfo && (
              <Suspense fallback={<Loader />}>
                <LeftDrawer
                  open={avatarInfo}
                  setOpen={setAvatarInfo}
                  drawerWidth={300}
                  anchor="left"
                  drHight={"100vh"}
                >
                  <AvatarPrsonInfo targetUserid={userid} />
                </LeftDrawer>
              </Suspense>
            )}
          </>
        }
        sx={{
          bgcolor: "grey.300",
          padding: 0,
          display: "block",
          paddingTop: 1,
          paddingBottom: 1,
        }}
      />
    </>
  );
};

function MainCardContent({ Quastion, faqid, faqGroup, rowIndex, answerCount }) {
  const [showReplyDrawer, setShowReplyDrawer] = useState(false);
  return (
    <>
      <Box>
        <Grid container direction="row" sx={{ alignItems: "center" }}>
          <Grid item xs={0.1}></Grid>
          <Grid item xs={5.9} align="left">
            <QuastionCounter rowIndex={rowIndex} />
            <GroupInfo faqGroup={faqGroup} />
          </Grid>
          <Grid item xs={5.9} align="right">
            <AddToFavorite />
            <ReplayCounter answerCount={answerCount} />
            <FollowAuther />
          </Grid>
          <Grid item xs={0.1}></Grid>
        </Grid>
      </Box>
      <ShowAnsewr setShowReplyDrawer={setShowReplyDrawer} Quastion={Quastion} />
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
