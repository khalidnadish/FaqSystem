import { Box, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";

function ShowGroupDetail({ userid }) {
  const { data, dataIsLoading } = useAxiosToGetData(`http://localhost:3001/person/getPersonCategory/${userid}`);
  

 


  return data?.map((grp) => {
    return (
      <ListItem key={grp.userid+grp.groupid} sx={{ padding: 0, fontSize: ".8rem" }}>
        <ListItemButton
          
          sx={{
            padding: 0,
            borderBottom: "1px solid lightgray",
          }}
        >
          <ListItemText disableTypography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "5px", fontSize: ".8rem" }}
            >
              <Box>
                <Typography  color={"primary"} variant="subtitle1" fontWeight={"normal"} ml={2}>
                  {grp.catname}
                  
              
                   
                </Typography>
              </Box>

              
            </Stack>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });












}

export default ShowGroupDetail;
