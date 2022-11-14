import React from "react";
import classes from "./TopDesign.module.css";
import { Link, Element } from "react-scroll";
import { AiOutlineLeft } from "react-icons/ai";
// import PlaceholderImg from "../icons/landing/PlaceholderImg";
import TopDesignIcon from "../icons/landing/TopDesign.svg";

function TopDesign() {
  return (
    <Element name="#hamgram">
      <section className={classes.section}>
        <div className={classes.mobImg}>
          <img src={TopDesignIcon} alt="design" />
        </div>
        <div>
          <h1>
            <strong> همگرام ،</strong>
            <div>
              <strong> پیشرو در تجارت اجتماعی</strong>
            </div>
          </h1>
          <p>
            همگرام بهت یاد میده برای راه اندازی و توسعه کسب و کارت کافیه خودت
            باشی و با خلاقیت، روی بازار هدفت تاثیر بذاری!
          </p>
          <div className={classes.center}>
            <div className={classes.linkBtn}>
              {" "}
              <a href="http://test.hamgramco.ir/dashboard">همین حالا شروع کن</a>
            </div>

            <Link to="#services" offset={-100}>
              <span>
                <span>خدمات ما</span>
                <AiOutlineLeft />
              </span>
            </Link>
          </div>
        </div>

        <div className={classes.img}>
          <img src={TopDesignIcon} alt="design" />
        </div>
      </section>
    </Element>
  );
}

export default TopDesign;
