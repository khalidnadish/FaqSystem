import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AntModal from "../modal/AntModal";

import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { AiOutlineEye } from "react-icons/ai";
import ShowAnswerdQuastionDetail from "./ShowAnswerdQuastionDetail";

function ShowQuastionDetail({ userid, avatarSrc, username, cr_date }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonQuastionDetail/${userid}`
  );
  const [showModal, setShowModal] = useState(false);
  const [qid, setQid] = useState(false);
  const [QtoShow, setQtoShow] = useState("");

  return data?.map((quastion) => {
    return (
      <React.Fragment key={quastion.faqid}>
        <ListItem
          secondaryAction={
            quastion.ans_count === 0 ? null : (
              <IconButton
                color="primary"
                onClick={() => {
                  setShowModal(true);
                  // TODO: Qid state change many time will effect performance
                  setQid(quastion.faqid)
                  setQtoShow( quastion.faq)
                }}
                sx={{
                  marginLeft: "3px",
                  bgcolor: "warning.light",
                  color: "background.paper",
                }}
              >
                <AiOutlineEye />
              </IconButton>
            )
          }
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
              <Typography
                color={"primary.light"}
                variant="subtitle1"
                fontWeight={"normal"}
                fontSize={".8rem"}
                align={"left"}
                // ml={2}
              >
                Publish on:{new Date(quastion.create_at).toDateString()} /
                Replay's:{" "}
                {quastion.ans_count === 0 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    No Replay Yet
                  </span>
                ) : (
                  <span
                    style={{
                      color: "green",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    {quastion.ans_count}
                  </span>
                )}
              </Typography>
              <Typography
                color={"primary.dark"}
                variant="subtitle1"
                fontWeight={"normal"}
                align={"left"}
                ml={2}
              >
                {quastion.faq}
              </Typography>

              <Typography
                // component={"a"}
                color={"error.dark"}
                variant="subtitle2"
                fontWeight={"normal"}
                align={"right"}
                ml={2}
              >
                Add Reply
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {showModal && (
          <AntModal
            setShowModal={setShowModal}
            showModal={showModal}
            username={username}
            cr_date={cr_date}
            avatarSrc={avatarSrc}
            Quastion={QtoShow}
            xcolor="yellow"
           
          >
            <ShowAnswerdQuastionDetail Qid={qid} />
          </AntModal>
        )}
      </React.Fragment>
    );
  });
}

export default ShowQuastionDetail;
