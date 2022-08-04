import React, { useEffect, useContext, lazy, Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { UserDetail } from "@/helper/context/userContext";
import { FaqDetail } from "@/helper/context/FAQContext";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";

const Loader = lazy(() => import("@/component/loader/Loader"));
const Navbar = lazy(() => import("@/component/Navbar/Navbar.jsx"));
const Faq = lazy(() => import("./faq/Faq"));
const Myfooter = lazy(() => import("@/component/footer/footer.jsx"));


function IndexPage() {
  const { userId, userName, userAvatar, setUserId, setIslogin, islogin } =
    useContext(UserDetail);
  const { faqUrl, faqInfo } = useContext(FaqDetail);
  useEffect(() => {}, [faqUrl]);
  return (
    <>
      <Container fixed >
        <Suspense fallback={<Loader xtext="Navbar"/>}>
          <Navbar />
        </Suspense>
     
            <Suspense fallback={<Loader  xtext="Faq"/>}>
              <Faq
                faqUrlLink={faqUrl}
                lookup={faqInfo.titleName}
                filterRow={faqInfo.recordsCount}
              />
            </Suspense>
        <Myfooter />
      </Container>
    </>
  );
}

export default IndexPage;
