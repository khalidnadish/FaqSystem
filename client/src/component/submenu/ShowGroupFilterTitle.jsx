import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import BoxInfo from "../BoxInfo/BoxInfo";
import { Typography } from "@mui/material";

export function ShowGroupFilterTitle({ titleName }) {
  return (
    <BoxInfo backColor={"warning.light"} forColor={"background.paper"}>
    <FaLayerGroup size={"2em"} /> <Typography>{titleName}</Typography>
  </BoxInfo>


 
  );
}
