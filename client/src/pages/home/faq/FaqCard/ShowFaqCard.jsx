import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { FaqDetail } from "../../../../helper/context/FAQContext";
import Grid from "@mui/material/Grid";
import { FixedSizeList } from "react-window";

const FaqCrads = lazy(() => import("./FaqCards"));
const Loader = lazy(() => import("../../../../component/loader/Loader"));

const ShowFaqCard = ({ faqdata }) => {
  const { faqInfo, setFaqInfo } = useContext(FaqDetail);
//  console.log("ShowFaqCard" ,  faqdata)
  useEffect(() => {
    setFaqInfo({ ...faqInfo, recordsCount: faqdata.length });
    console.log("faqRender")
  }, [faqdata]);

  {
    /* TODO: check if avatar image Not exisit */
  }


  const Row = useCallback(({ index, style }) => {
    const {
      faq,
      avatar,
      AnswerCount,
      faqid,
      autherName,
      catName,
      create_at,
      userid,
    } = faqdata[index] || {};

    



    return (
      <div style={style}>
        
          <FaqCrads
            Quastion={faq}
            src={avatar}
            count={AnswerCount}
            faqid={faqid}
            autherName={autherName}
            faqGroup={catName}
            create_at={create_at}
            userid={userid}
            rowIndex={index}
          />
        
      </div>
    );
  }, [faqdata]);




  const Row1 = ({ index, style }) => {
    const {
      faq,
      avatar,
      AnswerCount,
      faqid,
      autherName,
      catName,
      create_at,
      userid,
    } = faqdata[index] || {};

    



    return (
      <div style={style}>
        
          <FaqCrads
            Quastion={faq}
            src={avatar}
            count={AnswerCount}
            faqid={faqid}
            autherName={autherName}
            faqGroup={catName}
            create_at={create_at}
            userid={userid}
            rowIndex={index}
          />
        
      </div>
    );
  };









  return (
    <>
      <Grid
        container
        // spacing={1}
        direction="row"
        justifyContent="center"
        // alignItems="stretch"
      >
        {/* {faqdata.map((faqItem, index) => (
          <Suspense fallback={<Loader />} key={faqItem.faqid}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
           
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
        ))} */}
        <Grid item xs={12} sm={12} md={12} lg={10}>
        <Suspense fallback={<Loader />}>
          <FixedSizeList
            height={400}
            width={950}
            itemSize={220}
            itemCount={faqdata.length}
            // onItemsRendered={onItemsRendered}
            
          >
            {Row}
          </FixedSizeList>
        </Suspense>
        </Grid>
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
