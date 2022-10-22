import React from "react";
import classes from "./SideBar.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SideBarlogo from "../../icons/logos/SideBarlogo";
import DotIcon from "../../icons/logos/dotIcon";
function SideBarLogos() {
  const [name, username, image] = useSelector((state) => [
    state.user.name,
    state.user.username,
    state.user.image,
  ]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <SideBarlogo />
      </div>
      <div className={classes.PRealtive}>
        <div className={classes.dot}>
          <DotIcon />
        </div>
      </div>
      <div className={classes.PRealtive}>
        <img
          className={`${classes.profile}`}
          src={`${"http://51.210.61.208:8000"}${image}`}
          alt="logo"
        />
      </div>
      <div className=" text-center fs-5 d-none d-md-block">{name}</div>
      <div
        className="text-center mb-5 text-white-50 p-1  d-none d-md-block"
        dir="ltr"
      >
        @{username}
      </div>
    </React.Fragment>
  );
}

export default SideBarLogos;
