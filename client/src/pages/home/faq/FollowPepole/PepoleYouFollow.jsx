import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { FaqDetail } from "../../../../helper/context/FAQContext";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import useAxiosToGetData from "../../../../helper/custemHook/useAxiosToGetData";

import SendDirectMsg from "../../../../component/directMsg/SendDirectMsq";
import { Chip } from "@mui/material";
import { AiOutlineUserSwitch } from "react-icons/ai";

function PepoleYouFollow({ whatToshow, typeOfShow }) {
  const { data: dataFloewr, dataIsLoading: FloewrDataIsLoading } =
    useAxiosToGetData(whatToshow);
  // `/user/showflower/${userId}`

  return (
    <>
      <Box sx={{ marginLeft: "7px", paddingTop: "7px" }}>
        <nav aria-label="main mailbox folders">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
           
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Stack
                  direction={"column"}
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderBottom: "2px solid",
                    paddingBottom: "3px",
                    borderColor: "primary.light",
                  }}
                >
                  {typeOfShow === "following" && (
                    <FaUsers
                      color={"blue"}
                      size={60}
                      flex={1}
                      style={{ margin: "auto" }}
                    />
                  )}
                  {typeOfShow === "Followers" && (
                    <AiOutlineUserSwitch
                      color={"blue"}
                      size={60}
                      flex={1}
                      style={{ margin: "auto" }}
                    />
                  )}

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      textAlign={"left"}
                      flex={4}
                      ml={1}
                      color="primary"
                    >
                      {typeOfShow === "following" &&
                        "Person's You Follow Have Quastion And Answer's"}
                      {typeOfShow === "Followers" && "Following You"}
                    </Typography>
                    <Chip
                      variant="filled"
                      size="small"
                      label={dataFloewr?.length}
                      color="primary"
                    />
                  </Box>
                </Stack>
              </ListSubheader>
            }
          >
            {FloewrDataIsLoading && <ShowFlower datax={dataFloewr} />}
          </List>
        </nav>
      </Box>
    </>
  );
}

export default PepoleYouFollow;

const ShowFlower = ({ datax }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { setFaqUrl, setFaqInfo } = useContext(FaqDetail);
  const [openDirectMsg, setOpenDirectMsg] = useState(false);

  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setSelectedFaq(true);
    // CONTROL SEARCH CONDITION
    setFaqUrl(`/faq/FaqByFollowerUser/${index}`);
    setFaqInfo({ titleName: catName, recordsCount: 0 });
  };
  const handleDirectMsg = () => {
    setOpenDirectMsg(true);
  };

  return datax.map((catitem, index) => {
    return (
      <React.Fragment key={catitem.id}>
        <ListItem
          alignItems="flex-start"
          divider
          disablePadding
          disableGutters
          secondaryAction={
            <IconButton
              color="primary"
              sx={{ marginLeft: "3px", bgcolor: "background.paper" }}
              onClick={() => {
                {
                  handleDirectMsg();
                }
              }}
            >
              <RiSendPlaneFill size={15} />
            </IconButton>
          }
        >
          <ListItemButton
            disableGutters
            onClick={() => {
              handleListItemClick(catitem.followuser, catitem.username);
            }}
            sx={{
              paddingBottom: "1px",

              "& .MuiListItemButton-root": {
                padding: 0,
                bgcolor: "red",
              },
            }}
          >
            <ListItemAvatar
              sx={{ alignItems: "center", padding: 0, margin: 0 }}
            >
              <Avatar
                sx={{ width: "2rem", height: "2rem", padding: 0, margin: 0 }}
                src={catitem.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ color: "gray", fontSize: ".75rem" }}
                >
                  {catitem.username}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <SendDirectMsg
          open={openDirectMsg}
          setOpen={setOpenDirectMsg}
          userName={"test"}
        />
      </React.Fragment>
    );
  });
};
