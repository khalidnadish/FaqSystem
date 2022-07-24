import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import React from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";
import { AiOutlineEye } from "react-icons/ai";

function ShowQuastionDetail({ userid }) {
  const { data, dataIsLoading } = useAxiosToGetData(
    `http://localhost:3001/person/getPersonQuastionDetail/${userid}`
  );
  let value = true;
  console.log(data?.lenght, userid);
  return data?.map((quastion) => {
    return (
      <React.Fragment key={quastion.faqid}>
        <ListItem
          secondaryAction={
            quastion.ans_count === 0 ? null : (
              <IconButton
                color="primary"
                
                onClick={
                  ()=>{alert(quastion.faqid)}
                
                }

                sx={{ marginLeft: "3px", bgcolor: "warning.light",color:"background.paper" }}
              >
                <AiOutlineEye />
              </IconButton>
            )
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
                   <span style={{ color: "red",fontSize:".8rem",fontWeight:"bold" }}> No Replay Yet</span>
                 
                ) : (
                  <span style={{ color: "green",fontSize:".8rem",fontWeight:"bold",textDecoration:"underline"  }}>{quastion.ans_count}</span>
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
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </React.Fragment>
    );
  });
}

export default ShowQuastionDetail;
