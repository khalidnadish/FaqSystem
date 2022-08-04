import React, { lazy, Suspense } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import { BrowserRouter } from "react-router-dom";
// import "./app.css"
import { theme } from "./layout/theme";
import  Loader  from "./component/loader/Loader";

const MyRoutes = lazy(() => import("./layout/MyRoutes"));

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <Paper bgcolor={"warning.main"}> */}
          <Suspense fallback={<Loader xcolor="error" />}>
            <MyRoutes />
          </Suspense>
          {/* </Paper> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
export default React.memo(App);
