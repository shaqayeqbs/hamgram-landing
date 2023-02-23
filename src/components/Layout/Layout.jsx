import React, { memo } from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div dir="rtl">
      <section className="background">
        <MainNavigation />
        <main className={classes.container}>
          <Outlet />
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default memo(Layout);
