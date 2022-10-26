import React from "react";
import classes from "./Footer.module.css";
import HamgramLogo from "../icons/logos/hamgramLogo";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.flexContainer}>
        <h3>
          <HamgramLogo />
          HAMGRAM
        </h3>
        <div>
          <span>الان وقتشه که شروع کنی!</span>
          <div className={classes.linkBtn}>
            <a href="http://test.hamgramco.ir/dashboard">همین حالا شروع کن</a>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div>
          <h6>ارتباط با ما</h6>
          <p>تلفن:</p>
          <div>۰۹۲۲۴۱۶۶۷۰۱</div>
          <p>آدرس دفتر مرکزی:</p>
          <div>
            خیابان شریعتی، خیابان خواجه نصیر الدین طوسی نبش کوچه گیتی، ساختمان
            طوس، طبقه اول، واحد ۲
          </div>
        </div>
        <div>
          <h6>خدمات</h6>
          <p>آموزش و مشاوره</p>
          <p>پنل تحلیل رقبا همگرام</p>
          <p>طراحی محصول (استودیو طراحی وایا)</p>
        </div>
        <div>
          <h5>به اینستاگرام ما بپیوندید</h5>
          <Link to="someurl">
            <span>
              <SiInstagram />
            </span>
            <span dir="ltr"> @hamgramco</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
