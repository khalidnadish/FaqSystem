import  Box from "@mui/material/Box";
import  Divider from "@mui/material/Divider";
import  Grid from "@mui/material/Grid";
import React from "react";
import PersonReport from "./PersonReport";
import PersonVote from "./PersonVote";
const  PlsHelpArea=({ dataIsLoading })=> {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Divider sx={{marginBottom:"10px",marginTop:"10px"}}>hepl pls!</Divider>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {dataIsLoading && <PersonReport />}
        </Grid>
        <Grid item xs={12}>
          {dataIsLoading && <PersonVote />}
        </Grid>
      </Grid>
    </Box>
  );
}
export default PlsHelpArea