import React, { useContext, lazy, Suspense, useState } from "react";
import Paper from "@mui/material/Paper";
import { FaqDetail } from "../../helper/context/FAQContext";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ShowGroupFilterTitle } from "./ShowGroupFilterTitle";
import { ShowGroupFilterCounter } from "./ShowGroupFilterCounter";
import { ShowAllButton } from "./ShowAllButton";
import { FavoriteAction } from "./FavoriteAction";
import { MostQuastionViewed } from "./MostQuastionViewed";
import { PepoleYouTrackAction } from "./PepoleYouTrackAction";
import { PeopleFollowYou } from "./PeopleFollowYou";
import { QuastionYouLikeAction } from "./QuastionYouLikeAction";
import { GroupYouTrackAction } from "./GroupYouTrackAction";
import { AllGroup } from "./AllGroup";
import { HistoryAction } from "./HistoryAction";


const Loader = lazy(() => import("../loader/Loader"));

const Category = lazy(() => import("../../pages/home/faq/Category/Category"));

const PepoleYouFollow = lazy(() =>
  import("../../pages/home/faq/FollowPepole/PepoleYouFollow")
);
const LeftDrawer = lazy(() => import("../leftDrawer/LeftDrawer"));

function OtherNav({ userId }) {
  const [openUsers, setOpenUsers] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [dataToshow, setdataToshow] = useState("/category");
  const [typeOfShow, setTypeOfShow] = useState("all");
  const [view, setView] = React.useState('list');

  const { setFaqUrl, faqInfo } = useContext(FaqDetail);
  const handleShowAllFAQ = () => {
    setFaqUrl(`/faq`);
  };
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  
  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Paper
          elevation={15}
          sx={{
            justifyContent: "space-between",

            padding: "10px",
            width: "100%",
            alignItems: "center",
            position: "absolute",
            top: -19,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={12}
              >
                <Grid item xs={3} sm={3} md={3} align="center">
                  <ToggleButtonGroup
                    orientation="horizontal"
                    value={view}
                    exclusive
                    onChange={handleChange}
                  >
                    <ToggleButton value="list" aria-label="list">
                      <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                      <ViewModuleIcon />
                    </ToggleButton>
                    
                  </ToggleButtonGroup>
                </Grid>
                
                <Grid item xs={3} sm={3} md={3} align="center">
                  <ShowGroupFilterTitle titleName={faqInfo.titleName} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} align="center">
                  <ShowGroupFilterCounter conter={faqInfo.recordsCount} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} align="center">
                  <ShowAllButton handleShowAllFAQ={handleShowAllFAQ} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} align="center">
              <Grid
                container
                direction={"row"}
                justifyContent="center"
                alignItems="center"
                columns={14}
              >
                <Grid item xs={1.5} md={1.5}>
                  <FavoriteAction userId={userId} />
                </Grid>
                <Grid item xs={1.5} md={1.5}>
                  <HistoryAction userId={userId} />
                </Grid>

                <Grid item xs={1.5} md={1.5}>
                  <PeopleFollowYou
                    setOpenUsers={setOpenUsers}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </Grid>

                <Grid item xs={1.5} md={1.5} align="center">
                  <PepoleYouTrackAction
                    setOpenUsers={setOpenUsers}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </Grid>

                <Grid item xs={2} md={2} align="center">
                  <MostQuastionViewed />
                </Grid>
                <Grid item xs={2} md={2} align="center">
                  <QuastionYouLikeAction />
                </Grid>

                <Grid item xs={2} md={2} align="center">
                  <GroupYouTrackAction
                    setOpenGroups={setOpenGroups}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </Grid>
                <Grid item xs={2} md={2} align="center">
                  <AllGroup
                    setOpenGroups={setOpenGroups}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {openUsers && (
        <Suspense fallback={<Loader />}>
          <LeftDrawer
            open={openUsers}
            setOpen={setOpenUsers}
            drawerWidth={240}
            anchor="left"
            drHight={"100vh"}
          >
            <PepoleYouFollow whatToshow={dataToshow} typeOfShow={typeOfShow} />
          </LeftDrawer>
        </Suspense>
      )}
      {openGroups && (
        <Suspense fallback={<Loader />}>
          <LeftDrawer
            open={openGroups}
            setOpen={setOpenGroups}
            drawerWidth={240}
            anchor="left"
            drHight={"103ed 0vh"}
          >
            <Category whatToshow={dataToshow} typeOfShow={typeOfShow} />
          </LeftDrawer>
        </Suspense>
      )}
    </>
  );
}

export default OtherNav;
