import { FAQProvider } from "../helper/context/FAQContext";
import { UserProvider } from "../helper/context/userContext";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import PrivateRoute from "../helper/routeService/PrivateRoute";
import Login from "../pages/login/login/Login";
const Loader = lazy(() => import("../component/loader/Loader"));
const IndexPage = lazy(() => import("../pages/home/IndexPage"));
const FaqId = lazy(() => import("../pages/home/faq/FaqId"));

const MyRoutes = () => (
  <>
    <Toaster />
    <UserProvider>
      <FAQProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <IndexPage />
                </Suspense>
              }
            />

            <Route
              path="/FaqId/:faqid"
              element={
                <Suspense fallback={<Loader />}>
                  <FaqId />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </FAQProvider>
    </UserProvider>
  </>
);

export default React.memo(MyRoutes);
