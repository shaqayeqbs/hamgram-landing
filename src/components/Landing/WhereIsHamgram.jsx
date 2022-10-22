import React from "react";
import { Link } from "react-router-dom";
import classes from "./WhereIsHamgram.module.css";
import InstagramIcon from "../icons/InstagramIcon";
import { Element } from "react-scroll";

function WhereIsHamgram() {
  return (
    <Element name="#where-is-hamgram">
      <section className={classes.section}>
        <div className={classes.content}>
          <h2>همگرام کجاست؟</h2>
          <h3>
            همگرام جاییه که میخواد بهت کمک کنه خودت باشی و با شرایط و امکانات
            خودت کسب و کار آنلاینت رو راه بندازی و توسعش بدی
          </h3>
          <a href="https://instagram.com/hamgramco?igshid=YmMyMTA2M2Y=">
            <div>hamgramco</div>

            <InstagramIcon />
          </a>
        </div>
        <div>
          <img
            src="/images/people.png"
            alt="here is a picture of happy people"
          />
        </div>
      </section>
    </Element>
  );
}

export default WhereIsHamgram;
