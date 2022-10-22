import React, { memo } from "react";
// import User from "../../icons/User";
// import BellPin from "../../icons/Bell_pin";
import { BiLogOutCircle } from "react-icons/bi";
import classes from "./NavBar.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import logout from "../../Hepler/logout";

const NavBar = () => {
  const [name, username, image] = useSelector((state) => [
    state.user.name,
    state.user.username,
    state.user.image,
  ]);
  const logOutHandler = () => {
    logout();
  };

  return (
    <nav className={classes.nav}>
      <div>
        {" "}
        {/* <span className="d-none d-md-inline-block">
          <User />{" "}
        </span>
        <span className="mx-3 mx-md-0">
          <BellPin />{" "}
        </span> */}
        <button onClick={logOutHandler}>
          <BiLogOutCircle />{" "}
        </button>
      </div>

      <div className="d-flex justify-content-around d-md-none " dir="rtl">
        <div className="">
          <img
            className={`${classes.profile}`}
            src={`${"http://51.210.61.208:8000"}${image}`}
            alt="profile"
          />
        </div>

        <div>
          {" "}
          <div className="fs-4">{name}</div>
          <div className=" p-1 " dir="ltr">
            {username}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
