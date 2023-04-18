import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
const PriceList = React.lazy(() => import("./pages/PriceList"));

const RoutesList = () => {
  return (
    <Routes>
      <Route
        element={
          <React.Suspense fallback={<>...Loading</>}>
            <Layout />
          </React.Suspense>
        }
      >
        <Route
          path="/"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <LandingPage />
            </React.Suspense>
          }
          exact
        ></Route>
        <Route
          path="/price-list"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <PriceList />
            </React.Suspense>
          }
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default RoutesList;
