import React, { lazy, Suspense } from "react";
import { MdOutlineQuickreply, MdBookmarkBorder } from "react-icons/md";

import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";

import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Fab from "@mui/material/Fab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Loader = lazy(() => import("../../../component/loader/Loader.jsx"));
const FaqAnswerId = lazy(() => import("./FaqAnswerId"));

function FaqId({ faqid }) {
  const { data: faqwithid, dataIsLoading: isLoading } = useAxiosToGetData(
    `faq/${faqid}`
  );
  // alert(faqid)

  const { data: rowCount, dataIsLoading: isRrowCount } = useAxiosToGetData(
    `faq/getAnswerCountByfaqid/${faqid}`
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={3}
        sx={{ backgroundColor: "background.paper" }}
      >
        <Container fixed>
          <Toolbar>
            <Container sx={{ marginTop: "15px", marginBottom: "15px" }}>
              {isLoading && (
                <QuastionCard
                  avatar={faqwithid[0].avatar}
                  userName={faqwithid[0].username}
                  createDate={new Date(faqwithid[0].create_at).toDateString()}
                  faq={faqwithid[0].faq}
                  replaycount={isRrowCount && rowCount[0].rowcount}
                  likecount={10}
                  sx={{ marginTop: "15px" }}
                />
              )}
            </Container>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Suspense fallback={<Loader />}>
          {isLoading ? <FaqAnswerId id={faqwithid[0].faqid} /> : <Loader />}
        </Suspense>
      </Container>
    </>
  );
}

export default FaqId;

function QuastionCard({
  avatar,
  userName,
  createDate,
  faq,
  replaycount,
  likecount,
}) {
  return (
    <Card
      sx={{
        bgcolor: "bacground.paper",
        border: ".5px solid",
        borderTop: "10px solid",
        borderColor: "info.main",
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="recipe">
            Q
          </Avatar>
        }
        action={
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Badge
                badgeContent={replaycount}
                color="secondary"
                max={999}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MdOutlineQuickreply color="action" size={25} />
              </Badge>
              <Badge
                badgeContent={likecount}
                color="secondary"
                max={999}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MdBookmarkBorder color="action" size={25} />
              </Badge>
              <Fab color="secondary" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
            </Box>
          </>
        }
        title={
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">{userName}</Typography>
              <Typography variant="caption" sx={{ marginLeft: "15px" }}>
                {createDate}
              </Typography>
            </Box>
          </>
        }
        sx={{ paddingBottom: "5px", paddingTop: "7px" }}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="background.card">
          {faq}
        </Typography>
      </CardContent>
    </Card>
  );
}
