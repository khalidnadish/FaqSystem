import React from "react";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import {
  VscSmiley,
  VscEdit
} from "react-icons/vsc";
import Box from "@mui/material/Box";


export const AnswerOption = ({ expand }) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 245,
          width: 80,
          height: 9,
          backgroundColor: expand ? "info.main" : "error.main",
          borderRadius: "8px 0px 8px 0px"
        }} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 30,
          width: 20,
          height: 20,
          display: expand ? "block" : "none",
          backgroundColor:  "backgound.paper",
          boxShadow: "5",
          borderRadius: "4px",
          zIndex: "100"
        }}
      >
        <TiThumbsDown size={"1rem"} color={"red"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 60,
          width: 20,
          height: 20,
          backgroundColor: "backgound.paper",
          display: expand ? "block" : "none",
          boxShadow: "5",
          borderRadius: "4px",
          zIndex: "100"
        }}
      >
        <TiThumbsUp size={"1rem"} color={"blue"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 95,
          width: 20,
          height: 20,
          backgroundColor: "backgound.paper",
          display: expand ? "block" : "none",
          boxShadow: "5",
          borderRadius: "4px",
          zIndex: "100"
        }}
      >
        <VscEdit size={"1rem"} color={"brown"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 125,
          width: 20,
          height: 20,
          backgroundColor: "backgound.paper",
          display: expand ? "block" : "none",
          boxShadow: "5",
          borderRadius: "4px",
          zIndex: "100"
        }}
      >
        <VscSmiley size={"1rem"} color={"green"} />
      </Box>
    </>
  );
};
