import React, { useEffect, useContext, lazy, Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { UserDetail } from "/component/helper/context/userContext";
// import { UserDetail } from "../../helper/context/userContext";
import { UserDetail } from "@/helper/context/userContext";
import { FaqDetail } from "@/helper/context/FAQContext";

// const Loader = lazy(() => import("../../component/loader/Loader"));

const Loader = lazy(() => import("@/component/loader/Loader"));

const Navbar = lazy(() => import("@/component/Navbar/Navbar.jsx"));
const Faq = lazy(() => import("./faq/Faq"));

const Myfooter = lazy(() => import("@/component/footer/footer.jsx"));
// const OtherNav = lazy(() => import("../../component/submenu/OtherNav"));

function IndexPage() {
  const { userId, userName, userAvatar, setUserId, setIslogin, islogin } =
    useContext(UserDetail);
  const { faqUrl, faqInfo } = useContext(FaqDetail);
  console.log("islogin", islogin);

  useEffect(() => {}, [faqUrl]);

  return (
    <>
      <Container fixed>
        <Suspense fallback={<Loader />}>
          <Navbar />
        </Suspense>
        <Grid container direction={"column"} spacing={10}>
          <Grid item xs></Grid>
          <Grid item xs>
            <Suspense fallback={<Loader />}>
              <Faq
                faqUrlLink={faqUrl}
                lookup={faqInfo.titleName}
                filterRow={faqInfo.recordsCount}
              />
            </Suspense>
          </Grid>
        </Grid>
        <Myfooter />
      </Container>
    </>
  );
}

export default IndexPage;
