import React, { lazy, Suspense } from "react";

import "./faq.module.css";

import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";

import { Stack } from "@mui/material";
const ShowFaqCard = lazy(() => import("./FaqCard/ShowFaqCard"));

const Loader = lazy(() => import("../../../component/loader/Loader"));
const Nofaq = lazy(() => import("./NoFaqCards"));




export default function Faq({ faqUrlLink }) {

  const { data, dataIsLoading } = useAxiosToGetData(faqUrlLink);
// console.log("faq .........: " , data)
console.log(data)

  if (data?.length === 0) {
    return (
      <Suspense fallback={<Loader />}>
        <Nofaq />
      </Suspense>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Stack sx={{bgcolor:"primay"}}>
        {dataIsLoading && <ShowFaqCard faqdata={data} />}
        </Stack>
      </Suspense>
    </>
  );
}
