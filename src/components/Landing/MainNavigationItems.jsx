import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-scroll";

function MainNavigationItems() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.rightLink}>
        <Link to="#hamgram">
          <h5>
            <strong>HAMGRAM</strong>
          </h5>
        </Link>

        <li>
          <Link to="#where-is-hamgram" offset={-100}>
            همگرام کجاست؟
          </Link>
        </li>
        <li>
          <Link to="#what-are-we-doing?" offset={-150}>
            ما چیکار میکنیم؟
          </Link>
        </li>
        <li>
          <Link to="#where-is-your-path?" offset={-90}>
            کجای مسیری؟
          </Link>
        </li>
        <li>
          <Link to="#services" offset={-100}>
            خدمات
          </Link>
        </li>
        <li>
          <Link to="#successful-companinos" offset={-90}>
            همراهان موفق
          </Link>
        </li>
      </ul>
      {/* <ul > */}

      <a href="https://zeeg.me/hamgramco" className={classes.moshavereBtn}>
        {" "}
        درخواست مشاوره
      </a>
    </nav>
  );
}

export default MainNavigationItems;
