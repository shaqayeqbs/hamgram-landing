import React from "react";
import classes from "./design.module.css";
import ServicesFirstIcon from "../icons/landing/ServicesFirstIcon";
import { Link } from "react-router-dom";
import secondLogo from "../icons/landing/secondSvg.svg";

function Services() {
  return (
    <section className={classes.services}>
      <h2>خدمات همگرام</h2>
      <span>خوب بودن کافی نیست </span>
      <strong>باید عالی باشی </strong>
      <div className={classes.card}>
        <div className={classes.content}>
          <h1>آموزش و مشاوره</h1>
          <p>
            یک پاراگراف توضیخ برای این قسمت در مورد آموزش و مشاوره باید قرار
            داده شود. یک پاراگراف توضیخ برای این قسمت در مورد آموزش و مشاوره
            باید قرار داده شود.
          </p>
          <Link to="somePath">درخواست مشاوره </Link>
        </div>
        <div>
          {" "}
          <ServicesFirstIcon />
        </div>
      </div>
      <div className={`${classes.card} ${classes.direction}`}>
        <div className={classes.content}>
          <h1> پنل تحلیل رقبای همگرام </h1>
          <p>
            یک پاراگراف توضیخ برای این قسمت در مورد پنل تحلیل رقبای همگرام باید
            قرار داده شود. یک پاراگراف توضیخ برای این قسمت در موردپنل تحلیل
            رقبای همگرام باید قرار داده شود.
          </p>
          <Link to="somePath"> همین حالا شروع کن </Link>
        </div>
        <div>
          <img src={secondLogo} alt="" />
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.content}>
          <h1>استودیو طراحی وایا </h1>
          <p>
            یک پاراگراف توضیخ برای این قسمت در مورد آموزش و مشاوره باید قرار
            داده شود. یک پاراگراف توضیخ برای این قسمت در مورد آموزش و مشاوره
            باید قرار داده شود.
          </p>
          <a href="http://vaiastudio.ir/">ورود به سایت وایا استودیو</a>
        </div>
        <div>
          {" "}
          <ServicesFirstIcon />
        </div>
      </div>
    </section>
  );
}

export default Services;
