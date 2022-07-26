import  Box from "@mui/material/Box";
import  Divider from "@mui/material/Divider";
import  Grid from "@mui/material/Grid";
import React from "react";
import PersonReport from "./PersonReport";
import PersonUpVote from "./PersonUpVote";
import PersonDownVote from "./PersonDownVote";

const  PlsHelpArea=({ dataIsLoading })=> {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Divider sx={{marginBottom:"12px",marginTop:"10px"}}>Support Me Pls..!</Divider>
      <Grid container  >
       <Grid item xs={4}>
       <Grid container columns={4} justifyContent="space-around" sx={{border:1,borderRadius:1,borderColor:"grey.300"}}>
        <Grid item xs={1.5}>
          {dataIsLoading && <PersonUpVote />}
        </Grid>
        <Grid item xs={1.5}>
          {dataIsLoading && <PersonDownVote />}
        </Grid>
        </Grid>
        </Grid>


        <Grid item xs={8} sx={{border:1,borderRadius:1,borderColor:"grey.300"}}>
          {dataIsLoading && <PersonReport />}
        </Grid>
      </Grid>
    </Box>
  );
}
export default PlsHelpArea