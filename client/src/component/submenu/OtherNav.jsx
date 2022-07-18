import React, { useContext, lazy, Suspense, useState } from "react";
import Paper from "@mui/material/Paper";
import { FaqDetail } from "../../helper/context/FAQContext";



import "antd/dist/antd.css";
import Grid from "@mui/material/Grid";

import styled from "@emotion/styled";
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

const GridForIcon = styled(Grid)({
  borderColor: "rgba(0, 0, 0, 0.12)",
});

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

  const { setFaqUrl, faqInfo } = useContext(FaqDetail);

  const handleShowAllFAQ = () => {
    setFaqUrl(`/faq`);
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
                <Grid item xs={4} sm={4} md={4} align="center">
                  <ShowGroupFilterTitle titleName={faqInfo.titleName} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} align="center">
                  <ShowGroupFilterCounter conter={faqInfo.recordsCount} />
                </Grid>
                <Grid item xs={4} sm={4}  md={4} align="center">
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
                 
                <Grid item xs={2} md={2}>
                  <FavoriteAction userId={userId} />
                </Grid>

                <Grid item xs={2} md={2}>
                  <PeopleFollowYou
                    setOpenUsers={setOpenUsers}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </Grid>

                <GridForIcon item xs={2} md={2} align="center">
                  <PepoleYouTrackAction
                    setOpenUsers={setOpenUsers}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </GridForIcon>

                <GridForIcon item xs={2} md={2} align="center">
                  <MostQuastionViewed />
                </GridForIcon>
                <GridForIcon item xs={2} md={2} align="center">
                  <QuastionYouLikeAction />
                </GridForIcon>

                <GridForIcon item xs={2} md={2} align="center">
                  <GroupYouTrackAction
                    setOpenGroups={setOpenGroups}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                    userId={userId}
                  />
                </GridForIcon>
                <GridForIcon item xs={2} md={2} align="center">
                  <AllGroup
                    setOpenGroups={setOpenGroups}
                    setdataToshow={setdataToshow}
                    setTypeOfShow={setTypeOfShow}
                  />
                </GridForIcon>
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


