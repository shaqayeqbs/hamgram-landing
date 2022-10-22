import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-scroll";

function MobileItem({ onClikHandler }) {
  return (
    <nav className={classes.mobnav}>
      <ul className={classes.moblist}>
        <h5>
          <strong>HAMGRAM</strong>
        </h5>
        <li>
          <Link to="where-is-hamgram" onClick={onClikHandler} offset={-110}>
            همگرام کجاست؟
          </Link>
        </li>
        <li>
          <Link to="what-are-we-doing?" onClick={onClikHandler} offset={-150}>
            ما چیکار میکنیم؟
          </Link>
        </li>
        <li>
          <Link to="where-is-your-path?" onClick={onClikHandler} offset={-50}>
            کجای مسیری؟
          </Link>
        </li>
        <li>
          <Link to="services" onClick={onClikHandler} offset={-100}>
            خدمات
          </Link>
        </li>
        <li>
          <Link to="successful-companinos" onClick={onClikHandler}>
            همراهان موفق
          </Link>
        </li>
        <li>
          <Link to="moshavere" onClick={onClikHandler}>
            درخواست مشاوره
          </Link>
        </li>
      </ul>
      {/* <ul > */}
    </nav>
  );
}

export default MobileItem;
