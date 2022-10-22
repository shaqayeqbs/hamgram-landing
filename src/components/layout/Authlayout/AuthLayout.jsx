import classes from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";
import React, { memo } from "react";
import AuthLeftLogo from "../../icons/AuthLeftLogo";
import TopDesign from "../../icons/Mobile/TopDesign";
import BottomDesign from "../../icons/Mobile/BottomDesign";

function AuthLayout() {
  return (
    <div dir="ltr" className={classes.layout}>
      <div className={classes.laptopdesign}>
        <div className={classes.logoIcon}>
          <AuthLeftLogo />
        </div>
      </div>
      <div className={classes.topmob}>
        <TopDesign />
      </div>

      <main dir="rtl" className={classes.container}>
        <Outlet />
      </main>

      <div className={classes.bottommob}>
        <BottomDesign />
      </div>
    </div>
  );
}

export default memo(AuthLayout);
