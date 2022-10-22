import SidebarItem from "./SideBarItem";
import items from "../../../data/sidebar.json";
import React, { memo } from "react";
import classes from "./SideBar.module.css";
import SideBarLogos from "./SideBarLogos";
import MobBarItem from "./MobBarItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SideBar = () => {
  const [name, username, image] = useSelector((state) => [
    state.user.name,
    state.user.username,
    state.user.image,
  ]);
  return (
    <div className={classes.sidebar} dir="rtl">
      <SideBarLogos name={name} username={username} image={image} />

      <div className={classes.SideBarItem}>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className={classes.mobItem}>
        <MobBarItem />
      </div>
    </div>
  );
};
export default memo(SideBar);
