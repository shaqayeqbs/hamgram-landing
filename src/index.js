import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import store from "./store/store";
// import { Provider } from "react-redux";
import "./index.css";
import "./fonts/YekanBakh/YekanBakh-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);
