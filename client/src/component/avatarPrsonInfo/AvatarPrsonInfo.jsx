import React, { useState, useContext, useEffect } from "react";
import PlsHelpArea from "./PlsHelpArea";
import TakeActionArea from "./TakeActionArea";
import PersonFollowing from "./PersonFollowing";
import PersonFollower from "./PersonFollower";
import PersonAnswers from "./PersonAnswers";
import PersonQuastions from "./PersonQuastions";
import PersonGroup from "./PersonGroup";
import PersonAvatar from "./PersonAvatar";
import PersonAvatarInfo from "./PersonAvatarInfo";
import GenralInfo from "./GenralInfo";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { UserDetail } from "@/helper/context/userContext";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";

function AvatarPrsonInfo({ targetUserid }) {
  const { userId } = useContext(UserDetail);
  const { data, dataIsLoading } = useAxiosToGetData(
    `/person/${targetUserid}/${userId}`
  );
  const [followingTarget, setFollowingTarget] = useState(0);
  useEffect(() => {
    if (dataIsLoading) {
      setFollowingTarget(data[0].following1);
    }
  }, [dataIsLoading]);

  return (
    <>
      {dataIsLoading && (
        <CardMedia
          component="img"
          height="194"
          image={data[0].avatar}
          alt="Paella dish"
        />
      )}

      <Box sx={{ position: "relative" }}>
        {dataIsLoading && <PersonAvatar avatar={data[0].avatar} />}
        {dataIsLoading && (
          <PersonAvatarInfo
            Username={data[0].username}
            joinindDate={data[0].create_time}
          />
        )}
      </Box>

      <GenralInfo />
      <Box sx={{ padding: "10px", width: "280px", margin: "auto", mt: 0 }}>
        <Divider >Info</Divider>
        <Grid container spacing={1} columns={15}>
          <Grid item xs={3}>
            {dataIsLoading && (
              <PersonGroup
                userid={data[0].userid}
                username={data[0].username}
                category={data[0].category}
                avatarSrc={data[0].avatar}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>
          <Grid item xs={3}>
            {dataIsLoading && (
              <PersonQuastions
                userid={data[0].userid}
                quastion={data[0].quastion}
                username={data[0].username}
                category={data[0].category}
                avatarSrc={data[0].avatar}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>
          <Grid item xs={3}>
            {dataIsLoading && (
              <PersonAnswers
                answer={data[0].answer}
                userid={data[0].userid}
                username={data[0].username}
                category={data[0].category}
                avatarSrc={data[0].avatar}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>

          <Grid item xs={3} width={"100%"}>
            {dataIsLoading && (
              <PersonFollower
                follower={data[0].follower}
                userid={data[0].userid}
                username={data[0].username}
                category={data[0].category}
                avatarSrc={data[0].avatar}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>
          <Grid item xs={3}>
            {/* recheck counter on follow or unfollow */}
            {dataIsLoading && (
              <PersonFollowing
                following={followingTarget}
                userid={data[0].userid}
                username={data[0].username}
                category={data[0].category}
                avatarSrc={data[0].avatar}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>
        </Grid>
        {dataIsLoading && (
          <TakeActionArea
            dataIsLoading={dataIsLoading}
            isYoufollowed={data[0]?.isYoufollowed}
            targetUserid={data[0].userid}
            userId={userId}
            setFollowingTarget={setFollowingTarget}
          />
        )}
        <PlsHelpArea dataIsLoading={dataIsLoading} />
      </Box>
    </>
  );
}

export default AvatarPrsonInfo;
