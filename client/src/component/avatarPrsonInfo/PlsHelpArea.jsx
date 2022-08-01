import  Box from "@mui/material/Box";
import  Divider from "@mui/material/Divider";
import  Grid from "@mui/material/Grid";
import React from "react";
import PersonReport from "./PersonReport";
 
const  PlsHelpArea=({ dataIsLoading })=> {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Divider  >Support Me Pls..!</Divider>
      <Grid container  >
        


        <Grid item xs={12} sx={{border:1,borderRadius:1,borderColor:"grey.300"}}>
          {dataIsLoading && <PersonReport />}
        </Grid>
      </Grid>
    </Box>
  );
}
export default PlsHelpArea