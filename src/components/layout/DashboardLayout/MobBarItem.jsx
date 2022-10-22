import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import classes from "./SideBar.module.css";
import { RiUser6Line } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

function MobBarItem() {
  return (
    <nav className={classes.mobnav}>
      <div>
        <span>
          <Link to="/" className={classes.link}>
            <BiBarChartSquare />
          </Link>
        </span>
        <span>
          <Link to="/analyze" className={classes.link}>
            <BiBarChartSquare />{" "}
          </Link>
        </span>
      </div>
      <div>
        <span className="">
          <RiUser6Line />{" "}
        </span>
        <span>
          <AiOutlineSetting />{" "}
        </span>
      </div>
    </nav>
  );
}

export default MobBarItem;
