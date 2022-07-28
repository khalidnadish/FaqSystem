import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";


const Loader = ({xcolor="warning",xtext=""}) => {
  return (
    <Box sx={{ width: "100%"  }}>
      <Typography variant="h2">{xtext}</Typography>
      <LinearProgress  color={xcolor}/>
    </Box>
  );
};

export default React.memo(Loader);

 
