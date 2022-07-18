import PlsHelpArea from "./PlsHelpArea";
import TakeActionArea from "./TakeActionArea";
import PersonVote from "./PersonVote";
import PersonReport from "./PersonReport";

// import  FirstActionDone  from "./FirstActionDone";
// import  JoininDate  from "./JoininDate";
import PersonFollowing from "./PersonFollowing";
import PersonFollower from "./PersonFollower";
import PersonAnswers from "./PersonAnswers";
import PersonQuastions from "./PersonQuastions";
import PersonGroup from "./PersonGroup";
import PersonAvatar from "./PersonAvatar";
import PersonAvatarInfo from "./PersonAvatarInfo";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
function AvatarPrsonInfo({ userid }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/${userid}`
  );

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
      <Box sx={{ padding: "10px", width: "280px", margin: "auto", mt: 0 }}>
        <Divider sx={{marginBottom:"10px"}}>Info</Divider>
        <Grid container spacing={1}>
         
         
          <Grid item xs={4}>
            {dataIsLoading && (
              <PersonGroup
                category={data[0].category}
                avatarSrc={data[0].avatar}
                username={data[0].username}
                cr_date={data[0].create_time}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {dataIsLoading && <PersonQuastions quastion={data[0].quastion} />}
          </Grid>
          <Grid item xs={4}>
            {dataIsLoading && <PersonAnswers answer={data[0].answer} />}
          </Grid>
         
         
          <Grid item xs={12}>
            <Grid container direction={"row"} mt={1}>
              <Grid item xs={6}>
                {dataIsLoading && (
                  <PersonFollower follower={data[0].follower} />
                )}
              </Grid>
              <Grid item xs={6}>
                {dataIsLoading && (
                  <PersonFollowing following={data[0].following1} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      <TakeActionArea dataIsLoading={dataIsLoading} />
      <PlsHelpArea dataIsLoading={dataIsLoading} />
      </Box>
    </>
  );
}

export default AvatarPrsonInfo;
