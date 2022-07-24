import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ReplayDailog from "../modal/ReplayDailog";

import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { AiOutlineEye } from "react-icons/ai";
import ShowAnswerdQuastionDetail from "./ShowAnswerdQuastionDetail";
import { Avatar, Box, Grid } from "@mui/material";

function ShowQuastionDetail({ userid, avatarSrc, username, cr_date }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonAnsweredDetail/${userid}`
  );
  const [showModal, setShowModal] = useState(false);
  const [qid, setQid] = useState(false);
  const [QtoShow, setQtoShow] = useState("");

  return data?.map((quastion) => {
    return (
      <React.Fragment key={quastion.faqid}>
        <ListItem
          sx={{
            padding: 0,
            fontSize: ".8rem",
            my: 1,
            borderLeft: "3px solid",
            borderColor: quastion.ans_count === 0 ? "red" : "green",
          }}
        >
          <ListItemButton
            sx={{
              paddingTop: 0.5,
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListItemText disableTypography>
              <Grid container spacing={1}>
                <Grid item xs={1} sm={1} md={1} alignItems={"flex-start"}>
                  <Avatar
                    src={quastion.usercreator_avatar}
                    sx={{ height: "40px", width: "40px" }}
                  />
                </Grid>

                <Grid item xs={3} sm={3} md={2.5} align="left">
                  <Typography
                    color={"primary.light"}
                    variant="subtitle1"
                    fontWeight={"normal"}
                    fontSize={"1rem"}
                    align={"left"}
                  >
                    {quastion.usercreator_name}
                  </Typography>

                  <Typography
                    color={"primary.light"}
                    variant="subtitle1"
                    fontWeight={"normal"}
                    fontSize={".7rem"}
                    align={"left"}
                  >
                    {new Date(quastion.create_at).toDateString()}
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} align="left">
                  <Typography
                    color={"primary.dark"}
                    variant="subtitle1"
                    fontWeight={"normal"}
                    align={"left"}
                    ml={2}
                  >
                    {quastion.quastion}
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  borderLeft: "7px solid",
                  borderColor: "primary.light",
                  bgcolor:"info.light",
                  mr: 1,
                  p: 2,
                }}
              >
                <Typography color={"background.paper"} align="left">{quastion.answer}</Typography>
              </Box>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </React.Fragment>
    );
  });
}

export default ShowQuastionDetail;
