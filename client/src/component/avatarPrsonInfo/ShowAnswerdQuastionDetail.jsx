
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { Avatar, Box, Grid } from "@mui/material";


 

function ShowQuastionDetail({ Qid }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonAnsweredQuastion/${Qid}`
  );
  // console.log("Qid  : " + Qid);
  return data?.map((answer) => {
    return (
      <React.Fragment key={answer.ansid}>
        <ListItem disablePadding >
          <ListItemButton sx={{ cursor: "default" }}>
            <ListItemText disableTypography>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid",
                  borderRadius: "4px",
                  borderColor:"lightgray",
                  minHeight: "60px",
                  alignItems: "center",
                  padding: "3px",
                }}
              >
                <Grid
                  container
                  justifyContent={"flex-start"}
                  alignItems="flex-start"
                >
                  <Grid item xs={1} sm={1} md={0.5} align="">
                    <Avatar src={answer.avatar} />
                  </Grid>
                  <Grid item xs={2} sm={2} md={1} align="left">
                    <Typography variant="body1" align="left">
                      {answer.username}
                    </Typography>
                    <Typography
                      variant="caption"
                      align="left"
                      display={"block"}
                    >
                      {" "}
                      {new Date(answer.create_at).toDateString()}{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} align="left">
                    <Typography
                      color={"primary.dark"}
                      variant="h6"
                      fontWeight={"normal"}
                      align={"left"}
                      ml={2}
                    >
                      {answer.answer}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </React.Fragment>
    );
  });
}

export default ShowQuastionDetail;
