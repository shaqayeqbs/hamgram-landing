import React from "react";
import classes from "./Footer.module.css";
import HamgramLogo from "../icons/logos/hamgramLogo";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { digitsEnToFa } from "@persian-tools/persian-tools";

function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.flexContainer}>
        <h3>
          <div>
            {" "}
            <HamgramLogo />
          </div>
          <span> HAMGRAM</span>
        </h3>
        <div>
          <span>الان وقتشه که شروع کنی!</span>
          <div className={classes.linkBtn}>
            <a href="http://dashboard.hamgramco.ir/dashboard">
              همین حالا شروع کن
            </a>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div>
          <h6>ارتباط با ما</h6>
          <p>تلفن:</p>
          <div>
            <span> {digitsEnToFa(77624583)}</span>
            <span>
              <span> </span>
              <span>
                {" "}
                - <span>۰{digitsEnToFa(21)}</span>
              </span>
            </span>
          </div>
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
          {/* <p>طراحی محصول (استودیو طراحی وایا)</p> */}
        </div>
        <div>
          <h5>به اینستاگرام ما بپیوندید</h5>
          <Link to="https://instagram.com/hamgramco">
            <span>
              <SiInstagram />
            </span>
            <span dir="ltr"> @hamgramco</span>
          </Link>
          <div>
            <a
              referrerPolicy="origin"
              target="_blank"
              style={{ width: "4rem", height: "4rem", objectFit: "cover" }}
              href="https://trustseal.enamad.ir/?id=323913&amp;Code=BB1uCmUkPvEdHPhyaLxY"
            >
              <img
                referrerPolicy="origin"
                src="https://Trustseal.eNamad.ir/logo.aspx?id=323913&amp;Code=BB1uCmUkPvEdHPhyaLxY"
                alt=""
                style={{
                  // width: "4rem",
                  // height: "4rem",
                  // objectFit: "cover",
                  marginTop: "4rem",
                }}
                id="BB1uCmUkPvEdHPhyaLxY"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
