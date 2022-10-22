import React, { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import MainNavigationItems from "./MainNavigationItems";
import HamburgurMenu from "../icons/logos/HamburgurMenu";
import HamgramLogo from "../icons/logos/hamgramLogo";
import MobileItem from "./MobileItem";

function MainNavigation() {
  const [nav, setNav] = useState(false);
  const [token, setToken] = useState("");
  const navHandler = () => {
    setNav(!nav);
  };
  let url = "/http://auth";
  if (token === "") {
    setToken(localStorage.getItem("token"));
  } else {
    url = "http://dashboard";
  }

  return (
    <nav className={classes.header}>
      <HamgramLogo />

      <MainNavigationItems />

      {/* Hamburger Icon */}
      <div dir="rtl" onClick={navHandler} className={classes.navhandler}>
        <HamburgurMenu />
      </div>

      <a className={classes.leftLink} href={url}>
        ورود به پنل تحلیل
      </a>

      <div
        onClick={navHandler}
        className={nav ? classes.sidebar : classes.hidesidebar}
      >
        <MobileItem onClikHandler={() => setNav(!nav)} />
      </div>
    </nav>
  );
}

export default MainNavigation;
