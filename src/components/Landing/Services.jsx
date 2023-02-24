import React from "react";
import classes from "./design.module.css";
import ServicesFirstIcon from "../icons/landing/ServicesFirstIcon";
import secondLogo from "../icons/landing/secondSvg.svg";
import servicePic from "../icons/landing/servicePic.svg";

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
          <a href="https://zeeg.me/hamgramco/Meeting">درخواست مشاوره </a>
        </div>
        <div className={classes.none}>
          {" "}
          <ServicesFirstIcon />
        </div>

        <img src={servicePic} alt="hamgram" className={classes.servicePic} />
      </div>
      <div className={`${classes.card} ${classes.direction}`}>
        <div className={classes.content}>
          <h1> پنل تحلیل رقبای همگرام </h1>
          <p>
            یک پاراگراف توضیخ برای این قسمت در مورد پنل تحلیل رقبای همگرام باید
            قرار داده شود. یک پاراگراف توضیخ برای این قسمت در موردپنل تحلیل
            رقبای همگرام باید قرار داده شود.
          </p>
          <a dir="rtl" href="http://dashboard.hamgramco.ir/dashboard">
            همین حالا شروع کن
          </a>
        </div>
        <div>
          <img src={secondLogo} alt="hamgram" />
        </div>
      </div>

      {/* <div className={classes.card}>
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
      </div> */}
    </section>
  );
}

export default Services;
