import React, { useState } from "react";
import styled from "@emotion/styled";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Avatar, Chip } from "@mui/material";
import { AnswerOption } from "./AnswerOption";

export const StyledBox = styled(Box)(({ theme, expand }) => ({
  display: "flex",
  position: "relative",
  border: "1px solid",
  borderColor: "black",
  borderRadius: "4px",
  padding: "15px",
  backgroundColor: expand ? theme.palette.background.paper : "#f0ebe1",
  color: "white",
  height: expand ? "auto" : "20%",
  width: expand ? "100%" : "100%",
  marginBottom: "15px",
  textAlign: "justify",
  transition: "all 3s ease-out",
  overflow: expand ? null : "hidden",
}));

// --------------------------------------------------------------
export const MaxAndMinStyledBox = styled(Box)(({ theme, expand }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: 20,
  height: 20,
  backgroundColor: "warning.light",
  boxShadow: "5",
  borderRadius: "4px",
  color: "red",
  padding: 0,
  margin: "auto",
}));
// --------------------------------------------------------------

export const StyledAvatar = styled(Avatar)(({ theme, expand }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "warning.light",
  boxShadow: "5",
  borderRadius: "4px",
  color: "red",
  padding: 0,
  margin: "auto",
  width: 32,
  height: 32,
  

}));

export const Styledchip = styled(Chip)(({ theme, expand }) => ({
  position: "absolute",
  top: -10,
  left: 50,
  boxShadow: "5",
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.primary.light,
  fontWeight:"lighter",
  fontSize:'.65rem'
}));

export const Answer = ({ Answerdata }) => {
  const [expand, setExpand] = useState(true);
  const ToggleExpand = () => setExpand((prev) => !prev);
  console.log(expand);
  return (
    <>
      <StyledBox expand={expand}>
        <Styledchip
          label={`${Answerdata.username} / ${new Date(
            Answerdata.create_at
          ).toDateString()}`}
          size={"small"}
          variant="filled"
        />
        <Grid container alignItems={"center"}>
          <Grid item xs={4} sm={2} md={1} align="center">
            <StyledAvatar src={Answerdata.avatar} />
            <Box sx={{ disply: "flex" }}>
              <Typography
                variant="subtitle"
                sx={{ color: "grey.600" }}
              ></Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey.400" }}
              ></Typography>
            </Box>
          </Grid>
          <Grid item xs={8} md={10.8} align="center">
            <MaxAndMinStyledBox>
              <Button
                variant="contained"
                onClick={ToggleExpand}
                sx={{ minWidth: 0, minHeight: 0, padding: 0, margin: "auto" }}
              >
                {expand ? (
                  <VscChevronUp size={"1rem"} />
                ) : (
                  <VscChevronDown size={"1rem"} />
                )}
              </Button>
            </MaxAndMinStyledBox>
            <AnswerOption expand={expand} />
            <Typography
              variant="body1"
              sx={{ color: "grey.600", textAlign: "left" }}
            >
              {Answerdata.answer}
              {/* {qsampl} */}
            </Typography>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};
