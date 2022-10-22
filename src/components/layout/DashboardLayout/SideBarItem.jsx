import React from "react";
import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { BiBarChartSquare } from "react-icons/bi";

export default function SidebarItem({ item }) {
  const navLinkStyles = ({ isActive }) => {
    return {
      background: isActive ? "white" : "",
      color: isActive ? "#2f99a5" : "",
      borderRadius: isActive ? "17px 0 0 17px" : "",
    };
  };

  return (
    <NavLink
      to={item.path}
      className={`${classes["sidebar-item"]}  ${classes.plain}`}
      style={navLinkStyles}
    >
      <div className={classes.SideBarItem}>
        <span className="mx-2">
          <BiBarChartSquare />
        </span>
        <span>
          {" "}
          <strong> {item.title}</strong>
        </span>
      </div>
    </NavLink>
  );
}
