import React, { useState, lazy, Suspense } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Badge, { badgeClasses } from "@mui/material/Badge";

import Chip from "@mui/material/Chip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Draggable from 'react-draggable';

const LeftDrawer = lazy(() => import("@/component/leftDrawer/LeftDrawer"));

const AnswerDrawer = lazy(() => import("./ShowFaqAnswer/AnswerDrawer"));
const Loader = lazy(() => import("../../../component/loader/Loader"));
const FaqAnswerId = lazy(() => import("./FaqAnswerId"));
const AvatarPrsonInfo =lazy(()=>import ("@/component/avatarPrsonInfo/AvatarPrsonInfo"))



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
  // const fallbackImage = "../../fallback/1.png"
  const handleReply = () => {
    setShowAnswer(true);
  };
 
  const cardStyle = {
    width: "100%",
    border: `.5px solid`,
    borderColor: "primary.light",
    marginBottom: "15px",
    borderRadius: "8px",
 
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

const MainCardHeader = ({
  userid,
  src,
  autherName,
  create_at,
  faqGroup,
  rowIndex,
  answerCount,
}) => {
  const[avatarInfo,setAvatarInfo]=useState(false)
  const [imageUrl, setImageUrl] = useState(src);
  const fallbackImage = "http://localhost:3001/images/avatar/notExisit.jpg"
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const hadleAvatarClick=()=>{
    setAvatarInfo(true)
  }

  const errorHandler = () => {
    
    setImageUrl(fallbackImage);
  }

  
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
                <IconButton   onClick={()=>hadleAvatarClick()}> 
                <Avatar
                
                  src={imageUrl}
                  aria-label="recipe"
                  alt={faqGroup}
                  imgProps={{
                    onError: errorHandler,
                  }}
                  






                  sx={{ width: "30px", height: "30px", marginLeft: "5px" }}
                
                />
                {userid}
                </IconButton>
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
            <AvatarPrsonInfo targetUserid={userid}/>
          </LeftDrawer>
        </Suspense>
      )}
          </>
        }
        sx={{
          bgcolor: "primary.light",
          padding: 0,
          display: "block",
          paddingTop: 1,
          paddingBottom: 1,
        }}
      />
    </>
  );
};

function MainCardContent({
  Quastion,
  faqid,
  faqGroup,
  handleClick,
  rowIndex,
  answerCount,
}) {
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

      <Suspense fallback={<Loader />}>
        <AnswerDrawer
          open={showReplyDrawer}
          setOpen={setShowReplyDrawer}
          faqid={faqid}
        />
      </Suspense>
    </>
  );
}

function AddToFavorite({}) {
  return (
    <Tooltip title="Like Quastion">
      <IconButton aria-label="add to favorites" component="span" size="small">
        <FavoriteIcon size="small" color="success" />
      </IconButton>
    </Tooltip>
  );
}

function FollowAuther({}) {
  return (
    <Tooltip title="Like Quastion">
      <IconButton aria-label="add to favorites" component="span" size="small">
        <PersonAddIcon size="small" color="success" />
      </IconButton>
    </Tooltip>
  );
}

function ReplayCounter({ answerCount }) {
  return (
    <Tooltip title="Reply No!">
      <Badge
        badgeContent={answerCount}
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        variant="standard"
        sx={{
          [`& .${badgeClasses.standard}`]: {
            width: "15px",
            height: "20px",
            borderRadius: "20%",
          },
          "& .MuiBadge-badge": {
            left: 9,
            top: 3,
            border: `2px solid `,
            // borderColor: "primary.light",
            color: "background.paper",
            padding: "4px ",
            fontSize: ".7rem",
          },
        }}
      >
        <IconButton aria-label="add to favorites" component="span">
          <QuickreplyIcon />
        </IconButton>
      </Badge>
    </Tooltip>
  );
}

function GroupInfo({ faqGroup, handleClick }) {
  return (
    <Chip
      label={faqGroup}
      variant="filled"
      // color="warning"
      size="small"
      onClick={() => {
        handleClick();
      }}
      icon={<PersonAddIcon />}
      sx={{
        marginTop: 1,
        marginLeft: 1,
      }}
    />
  );
}

function QuastionCounter({ rowIndex }) {
  return (
    <Chip
      label={rowIndex + 1}
      variant="filled"
      // color="warning"
      size="small"
      sx={{
        marginTop: 1,
        marginLeft: 1,
      }}
    />
  );
}

function AddAnswer({}) {
  return (
    <Tooltip title="Add Answer">
      <IconButton
        // component="span"
        size="small"
        color="primary"
      >
        <RateReviewIcon fontSize="small" sx={{ color: "background.paper" }} />
      </IconButton>
    </Tooltip>
  );
}

function ExtraOptionRule({}) {
  return (
    <IconButton aria-label="settings" variant="filled" size="small">
      <MoreVertIcon fontSize="small" />
    </IconButton>
  );
}

function ShowAnsewr({ setShowReplyDrawer, Quastion }) {
  return (
    <Tooltip title="click to see Answer's">
      <CardContent
        onClick={() => {
          setShowReplyDrawer(true);
        }}
        sx={{
          cursor: "pointer",
          "&:hover": {
            borderBottom: "5px solid",
            borderColor: "warning.dark",
            backgroundColor: "primary.dark",

            color: "background.paper",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography
          sx={{
            wordBreak: "break-word",
          }}
        >
          {Quastion}
        </Typography>
      </CardContent>
    </Tooltip>
  );
}
