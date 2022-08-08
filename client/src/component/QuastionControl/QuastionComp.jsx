import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";

export function QuastionComp({ Qdata }) {
  console.log("data" + Qdata);
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={3} sm={1} md={1} align="center">
        <Avatar src={Qdata[0]?.Qavatar} />
        <Typography variant="subtitle1" color={"grey.600"}>
          {Qdata[0]?.username}
        </Typography>
      </Grid>
      <Grid item xs={9} align="center">
        <Box
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            padding: "15px",
            mb: 1
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "grey.600", textAlign: "left", borderRadius: "4px" }}
          >
            {Qdata[0]?.faq}
            {/* {qsampl} */}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
