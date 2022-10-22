import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

const RoutesList = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...Loading</>}>
            <LandingPage />
          </React.Suspense>
        }
        exact
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default RoutesList;
