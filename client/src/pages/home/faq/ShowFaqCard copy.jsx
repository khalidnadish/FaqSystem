import React, { lazy, Suspense, useContext, useEffect } from "react";
import { FaqDetail } from "../../../helper/context/FAQContext";
import Grid from "@mui/material/Grid";

const FaqCrads = lazy(() => import("./FaqCard/FaqCards"));
const Loader = lazy(() => import("../../../component/loader/Loader"));



const ShowFaqCard = ({ faqdata }) => {
  const { faqInfo, setFaqInfo } = useContext(FaqDetail);

  useEffect(() => {
    setFaqInfo({ ...faqInfo, recordsCount: faqdata.length });
  }, [faqdata]);

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {faqdata.map((faqItem, index) => (
          <Suspense fallback={<Loader />} key={faqItem.faqid}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            {/* TODO: check if avatar image Not exisit */}
              <FaqCrads
                Quastion={faqItem.faq}
                src={faqItem.avatar}
                count={faqItem.AnswerCount}
                faqid={faqItem.faqid}
                autherName={faqItem.autherName}
                faqGroup={faqItem.catName}
                create_at={faqItem.create_at}
                userid={faqItem.userid}
                rowIndex={index}
              />
            </Grid>
          </Suspense>
        ))}
      </Grid>
    </>
  );
};
export default ShowFaqCard;

function checkImage(imageSrc, good, bad) {
  var img = new Image();
  img.onload = good; 
  img.onerror = bad;
  img.src = imageSrc;
}