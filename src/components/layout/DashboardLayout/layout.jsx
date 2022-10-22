import React, { memo } from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";

const DashboardLayout = () => {
  return (
    <div dir="rtl" className={classes.layout}>
      <div className={classes.fixedsidebar}>
        <SideBar />
      </div>

      <main className={classes.container}>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
