import React, { useState } from "react";
import useAxiosToGetData from "../../helper/custemHook/useAxiosToGetData";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { QuastionComp } from "./QuastionComp";
import { Answer } from "./Answer";
import { QControlArea } from "./QControlArea";

const qsampl = `It is a long established fact that a reader will
be distracted by the readable content of a page when
looking at its layout. The point of using Lorem Ipsum 
is that it has a more-or-less normal distribution of letters,
as opposed to using 'Content here, content here', making
it look like readable English. Many desktop publishing packages
and web page editors now use Lorem Ipsum as their default model text,
and a search for 'lorem ipsum' will uncover many web sites still in 
their infancy. Various versions have evolved over the years, sometimes 
by accident, sometimes on purpose (injected humour and the like).`;
const Dtitle = {
  color: "background.paper",
  boxShadow: 16,
  borderTop: "7px solid",
  padding: 0.5,
};

export default function QandA({ id,open,setOpen}) {
  // id = 2;
  const { data: FAQ, dataIsLoading: isLoading } = useAxiosToGetData(
    `faq/QuationDataById/${id}`
  );
  const { data: ANSWER, dataIsLoading: isLoadingANSWER } = useAxiosToGetData(
    `faq/AnswerDataByFAQId/${id}`
  );

  return (
    <>
      {/* {isLoading && <ShowReplay faqdata={faqwithid} />} */}
      {isLoading && <ShowData FAQdata={FAQ} ANSWERdata={ANSWER} open={open} setOpen={setOpen}/>}
    </>
  );
}
const ShowData = ({ FAQdata, ANSWERdata,open,setOpen }) => {
  
  const [flscreen, setFlscreen] = useState(true);
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={flscreen}
        scroll={"paper"}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              minWidth: "300px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="draggable-dialog-title" sx={Dtitle}>
          <QControlArea
            setFlscreen={setFlscreen}
            setOpen={setOpen}
            flscreen={flscreen}
            Qdata={FAQdata}
            open={open}
          />
          <QuastionComp Qdata={FAQdata} />
        </DialogTitle>
        <DialogContent>
          <br />
          <DisplayAnswer Answerdata={ANSWERdata} />
        </DialogContent>
      </Dialog>
    </>
  );
};

const DisplayAnswer = ({ Answerdata }) => {
  return Answerdata?.map((answer) => {
    return (
      <React.Fragment key={answer.ansid}>
        <Answer Answerdata={answer} />
      </React.Fragment>
    );
  });
};


