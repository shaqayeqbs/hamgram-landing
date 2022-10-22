import React from "react";
import RoutesList from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./@core/Error/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={4000}
        rtl={true}
        limit={1}
      />
      <RoutesList />
    </ErrorBoundary>
  );
}

export default App;
