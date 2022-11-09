import React from "react";
import classes from "./WhereIsHamgram.module.css";
import InstagramIcon from "../icons/InstagramIcon";
import { Element } from "react-scroll";
import WhereIsHamgramPic from "../icons/landing/WhereIsHamgramPic.svg";
import WhereIsHamgramMob from "../icons/landing/WhereIsHamgramMob.svg";

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
        <div className={classes.img}>
          <img src={WhereIsHamgramPic} alt="" />
        </div>
        <div className={classes.mobImg}>
          <img src={WhereIsHamgramMob} alt="" />
        </div>
      </section>
    </Element>
  );
}

export default WhereIsHamgram;
