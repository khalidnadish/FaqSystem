import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMaximize2 } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { Button } from "@mui/material";

export const QControlArea = ({ setFlscreen, setOpen, flscreen, Qdata,open }) => {
  return (
    <>
      <Box display="flex" justifyContent={"space-between"}>
        <Box display={"flex"} ml={2} mb={0.5} justifyContent="flex-start">
          <Chip
            label={Qdata[0].faqcolseoropen === 0 ? "Close" : "Open"}
            size="small"
            sx={{ ml: 0.5, backgroundColor: "success.light", color: "white" }} />
          <Chip
            label={Qdata[0].catname}
            size="small"
            sx={{ ml: 0.5, backgroundColor: "warning.light", color: "white" }} />
          <Chip
            label={`Answer : ${Qdata[0].replycount}`}
            size="small"
            sx={{ ml: 0.5, backgroundColor: "error.light", color: "white" }} />
          <Chip
            label={new Date(Qdata[0].create_at).toDateString()}
            size="small"
            sx={{ ml: 0.5, backgroundColor: "info.light", color: "white" }} />
        </Box>
        <Box display={"flex"} justifyContent="flex-end">
          <Button
            sx={{
              border: "1px solid",
              padding: 0,
              display: "flex",
              width: "17px",
              height: "17px",
              minHeight: 0,
              minWidth: 0,
              mr: 1
            }}
            onClick={() => setFlscreen(!flscreen)}
          >
            {flscreen ? (
              <FiMinimize2 size={"1.4rem"} />
            ) : (
              <FiMaximize2 size={"1.4rem"} />
            )}
          </Button>

          <Button
            sx={{
              border: "1px solid",
              padding: 0,
              display: "flex",
              minHeight: 0,
              minWidth: 0,
              width: "17px",
              height: "17px"
            }}
            onClick={() => setOpen(false)}
          >
            <AiOutlineCloseCircle size={"1.5rem"} />
          </Button>
        </Box>
      </Box>
    </>
  );
};
