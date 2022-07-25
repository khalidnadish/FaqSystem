import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MdFollowTheSigns } from "react-icons/md";

import React from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { TbArrowsJoin } from "react-icons/tb";
import { Avatar, Box } from "@mui/material";

function ShowFollowerData({ userid, avatarSrc, username, cr_date }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonFollowerDetail/${userid}`
  );

  return data?.map((follower) => {
    return (
      <React.Fragment key={follower.id}>
        <ListItem
          secondaryAction={
            <IconButton
              color="primary"
              sx={{ marginLeft: "3px", bgcolor: "warning.light" }}
            >
              <MdFollowTheSigns size={15} />
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
                  src={follower.followavatar}
                  alt={follower.followusername}
                />
                <Typography
                  color={"primary"}
                  variant="subtitle1"
                  fontWeight={"normal"}
                  align={"left"}
                  ml={2}
                >
                  {follower.followusername}
                </Typography>
                <Typography
                  color={"primary"}
                  variant="caption"
                  fontWeight={"normal"}
                  align={"left"}
                  display="block"
                  ml={2}
                >
                  {new Date(follower.create_at).toDateString()}
                </Typography>
              </Box>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </React.Fragment>
    );
  });
}

export default ShowFollowerData;
