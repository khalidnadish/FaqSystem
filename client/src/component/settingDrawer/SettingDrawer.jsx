import React, { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

// import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { FaUserEdit } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { BsBookmarkCheck } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

import { UserDetail } from "../../helper/context/userContext";

function SettingDrawer({ open, setOpen }) {
  const { userName, setThemeMode, themeMode, userAvatar } =
    useContext(UserDetail);
  const [toggleMode, setToggleMode] = useState(true);
  const [toggleLang, setToggleLang] = useState(true);
  // const [t, i18n] = useTranslation();

  const theme1 = createTheme({
    palette: {
      mode: themeMode,
    },

    typography: {
      allVariants: {
        fontFamily: "Noto Kufi Arabic",
        fontWeight: "light",
        textTransform: "none",
        wordWrap: "break-word",
        fontSize: ".8rem",
      },
      paper: {
        background: "red",
      },
    },
  });

  const handleToggleMode = (event) => {
    setToggleMode((prev) => !event.target.checked);

    if (toggleMode) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const handleToggleLang = (event) => {
    setToggleLang((prev) => !event.target.checked);

    if (!toggleLang) {
      document.body.dir = "rtl";
      i18n.changeLanguage("ar");
      cookie.remove("i18next");
      cookie.set("i18next", "ar");
    } else {
      document.body.dir = "ltr";
      i18n.changeLanguage("en");
      cookie.remove("i18next");
      cookie.set("i18next", "en");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme1}>
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          role="presentation"
          onClose={() => {
            setOpen(false);
          }}
        >
          <List>
            <Box sx={{ width: "300px" }}>
              <Stack direction={"column"}>
                <Avatar
                  sx={{
                    width: "130px",
                    height: "120px",
                    margin: "auto",
                    mb: 2,
                    mt: 2,
                    border: "2px solid lightgray",
                    // justifyContent: "center",
                    // display: "flex",
                  }}
                  src={userAvatar}
                />
                <Typography
                  sx={{ textSize: "3rem" }}
                  textAlign={"center"}
                  mb={1}
                >
                  {userName}
                </Typography>
                <Box sx={{ margin: "auto", paddingBottom: "5px" }}>
                  <ButtonGroup
                    variant="outlined"
                    color="primary"
                    aria-label=""
                    dense
                    size="small"
                  >
                    <Button>10 followers</Button>
                    <Button> 500 following</Button>
                  </ButtonGroup>
                </Box>
              </Stack>

              <Divider>
                <FaUserEdit />
              </Divider>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      "&.MuiListItemIcon-root": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <RiQuestionAnswerLine />
                  </ListItemIcon>

                  <ListItemText>Answers</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      "&.MuiListItemIcon-root": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <AiOutlineQuestionCircle />
                  </ListItemIcon>
                  <ListItemText>Questions</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      "&.MuiListItemIcon-root": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <FiActivity />
                  </ListItemIcon>

                  <ListItemText>Activity</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      "&.MuiListItemIcon-root": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <BsBookmarkCheck />
                  </ListItemIcon>

                  <ListItemText>Bookmark's</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding dense>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      "&.MuiListItemIcon-root": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <RiDraftLine />
                  </ListItemIcon>
                  <ListItemText>Draft's</ListItemText>
                </ListItemButton>
              </ListItem>

              <Divider>
                <SettingsApplicationsIcon />
              </Divider>

              <SettingItems
                toggleLang={toggleLang}
                handleToggleLang={handleToggleLang}
                toggleMode={toggleMode}
                handleToggleMode={handleToggleMode}
              />

              {/* <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem> */}
            </Box>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default React.memo(SettingDrawer);

function SettingItems({
  toggleLang,
  handleToggleLang,
  toggleMode,
  handleToggleMode,
}) {
  return (
    <>
      <ListItem disablePadding dense>
        <ListItemButton>
          <ListItemIcon
            sx={{
              "&.MuiListItemIcon-root": {
                justifyContent: "flex-start",
              },
            }}
          >
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
            >
              {toggleLang ? (
                <typography textAlign={"left"}>English Language</typography>
              ) : (
                <typography textAlign={"left"}>Arabic Language</typography>
              )}

              <Switch color={"primary"} onChange={handleToggleLang} />
            </Stack>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding dense>
        <ListItemButton>
          <ListItemIcon
            sx={{
              "&.MuiListItemIcon-root": {
                justifyContent: "flex-start",
              },
            }}
          >
            {toggleMode ? <DarkModeIcon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
            >
              {toggleMode ? (
                <typography textAlign={"left"}>Night mode</typography>
              ) : (
                <typography textAlign={"left"}>Day mode</typography>
              )}

              <Switch color={"warning"} onChange={handleToggleMode} />
            </Stack>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
}
