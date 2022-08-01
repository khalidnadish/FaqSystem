import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import PersonDirectMsg from "./PersonDirectMsg";
import PersonFollowAction from "./PersonFollowAction";
import PersonUpVote from "./PersonUpVote";
import PersonDownVote from "./PersonDownVote";
const TakeActionArea = ({
  dataIsLoading,
  isYoufollowed,
  targetUserid,
  userId,
  setFollowingTarget,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Divider sx={{ marginBottom: "3px", marginTop: "3px" }}>
        Take Action
      </Divider>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          {dataIsLoading && (
            <PersonFollowAction
              isYoufollowed={isYoufollowed}
              targetUserid={targetUserid}
              userId={userId}
              setFollowingTarget={setFollowingTarget}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {dataIsLoading && <PersonDirectMsg />}
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            columns={4}
            justifyContent="space-around"
            sx={{ border: 1, borderRadius: 1, borderColor: "grey.300" }}
          >
            <Grid item xs={1.5}>
              {dataIsLoading && <PersonUpVote />}
            </Grid>
            <Grid item xs={1.5}>
              {dataIsLoading && <PersonDownVote />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TakeActionArea;
