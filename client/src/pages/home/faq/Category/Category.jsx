import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Chip from "@mui/material/Chip";

import { UserDetail } from "../../../../helper/context/userContext";
import { FaqDetail } from "../../../../helper/context/FAQContext";
import { VscLayersActive } from "react-icons/vsc";

import useAxiosToGetData from "../../../../helper/custemHook/useAxiosToGetData";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

// category/getUserCategory/1

function Category({ whatToshow, typeOfShow }) {
  const { data: dataCategory, dataIsLoading: catDataIsLoading } =  useAxiosToGetData(whatToshow);

  const { userId } = useContext(UserDetail);
  const [followstuts, setFollowstuts] = useState(0);

  useEffect(() => {}, [whatToshow]);

  return (
    <>
      <List  aria-labelledby="nested-list-subheader" >
        {catDataIsLoading && (
          <ShowGroupData
            showMyGroup={dataCategory}
            followstuts={followstuts}
            userId={userId}
            typeOfShow={typeOfShow}
          />
        )}
      </List>
    </>
  );
}
export default React.memo(Category);

const ShowGroupData = ({ showMyGroup, followstuts, userId, typeOfShow }) => {
  // console.log("typeOfShow  :" + typeOfShow);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { setFaqUrl, setFaqInfo } = useContext(FaqDetail);

  const handleListItemClick = (index, catName, rowCount) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setFaqUrl(`http://localhost:3001/faq/bygroup/${index}`);
    setFaqInfo({ titleName: catName, recordsCount: rowCount });
    setSelectedFaq(true);
  };

  return showMyGroup.map((catitem) => {
    return (
      <React.Fragment  key={catitem.catid}>
      <ListItem sx={{ padding: 0, fontSize: ".8rem" }}>
        <ListItemButton
          onClick={() => {
            handleListItemClick(
              catitem.catid,
              catitem.catName,
              catitem.faqrowcount
            );
          }}
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
                <Typography variant="subtitle1" fontWeight={"normal"} ml={2}>
                  {catitem.catName}    {catitem.catid}
                </Typography>
              </Box>

              <Box>
                <Chip
                  variant="filled"
                  color={typeOfShow === "all" ? "success" : "primary"}
                  size="small"
                  label={catitem.faqrowcount}
                  icon={<ModeCommentIcon />}
                />
              </Box>
            </Stack>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      </React.Fragment>
    );
  });
};
