import React from "react";

import { GrUnlock } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { Box, Grid, Typography } from "@mui/material";





function GenralInfo() {
  return (
    <Box
      mt={3}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={4} alignItems="center">
          <GrUnlock />
          <Typography component={"a"} color={"primary"} variant="h7" ml={0.5}>
            Active
          </Typography>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <FaRegClock />
          <Typography component={"a"} color={"primary"} variant="h7" ml={0.5}>
            2.1
          </Typography>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <BsCashCoin />
          <Typography component={"a"} color={"primary"} variant="h7" ml={0.5}>
            1575
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default GenralInfo