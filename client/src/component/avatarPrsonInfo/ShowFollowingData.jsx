import React from "react";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MdFollowTheSigns } from "react-icons/md";

import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { GiShadowFollower } from "react-icons/gi";

import { Avatar, Box } from "@mui/material";

function ShowFollowingData({ userid }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `/person/getPersonFollowingDetail/${userid}`
  );

  return data?.map((following) => {
    return (
      <React.Fragment key={following.id}>
        <ListItem
          secondaryAction={
            <IconButton
              color="primary"
              sx={{ marginLeft: "3px", bgcolor: "warning.light" }}
            >
              <GiShadowFollower size={15} />
            </IconButton>
          }
          sx={{ padding: 0, fontSize: ".8rem", my: 1 }}
        >
          <ListItemButton
            sx={{
              paddingTop: 0.5,
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListItemText disableTypography>
              <Box display={"flex"}  alignItems={"center"}>
                <Avatar
                  src={following.followavatar}
                  alt={following.followusername}
                />
                <Typography
                  color={"primary"}
                  variant="subtitle1"
                  fontWeight={"normal"}
                  align={"left"}
                  ml={2}
                >
                  {following.followusername} /
                </Typography>
                <Typography
                  color={"primary"}
                  variant="caption"
                  fontWeight={"normal"}
                  align={"left"}
                  display="block"
                  ml={2}
                >
                  {new Date(following.create_at).toDateString()}
                </Typography>
              </Box>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </React.Fragment>
    );
  });
}

export default ShowFollowingData;
