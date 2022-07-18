import React from "react";
import  Grid   from "@mui/material/Grid";
import  Divider from "@mui/material/Divider";
import  Box  from "@mui/material/Box";
import PersonDirectMsg from "./PersonDirectMsg";
import PersonFollowAction from "./PersonFollowAction";
const  TakeActionArea=({ dataIsLoading })=> {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Divider sx={{marginBottom:"10px",marginTop:"10px"}}>Take Action</Divider>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          {dataIsLoading && <PersonFollowAction />}
        </Grid>
        <Grid item xs={6}>
          {dataIsLoading && <PersonDirectMsg />}
        </Grid>
      </Grid>
    </Box>
  );
}
export default TakeActionArea
