import React, { lazy, Suspense } from "react";

import "./faq.module.css";

import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";
const ShowFaqCard = lazy(() => import("./ShowFaqCard"));

const Loader = lazy(() => import("../../../component/loader/Loader"));
const Nofaq = lazy(() => import("./NoFaqCards"));




export default function Faq({ faqUrlLink }) {
  const { data, dataIsLoading } = useAxiosToGetData(faqUrlLink);
// console.log("faq .........: " , data)

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
        {dataIsLoading && <ShowFaqCard faqdata={data} />}
      </Suspense>
    </>
  );
}
