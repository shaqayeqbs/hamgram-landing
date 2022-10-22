import React from "react";
import { Element } from "react-scroll";
import WhatDoWeDoIcon from "../icons/landing/WhatDoWeDoIcon";
import WhatDoWeDoMob from "../icons/landing/WhatDoWeDoMob";
import classes from "./design.module.css";
import WhereIsYourPathIcon from "../icons/landing/WhereIsYourPathIcon";
import WhereIsYourPathMob from "../icons/landing/WhereIsYourPathMob";
import { AiOutlineLeft } from "react-icons/ai";

function WhatDoWeDo() {
  return (
    <>
      <Element name="#what-are-we-doing?">
        <div className={classes.WhatDoWeDoContainer}>
          <WhatDoWeDoIcon />
        </div>
        <div className={classes.WhatDoWeDoMob}>
          <WhatDoWeDoMob />
        </div>
      </Element>
      <Element name="#where-is-your-path?">
        <div className={classes.whereAreYouSection}>
          {" "}
          <h1>تو کجای این مسیری ؟</h1>
          <p>
            اینجا مسیر تجارت اجتماعیه، جاییه که تو باید کسب و کارت رو توی پلتفرم
            هایی مثل اینستا رشد بدی و کاری کنی که کسب و کارت مادام العمر به این
            مسیر پر قدرت ادامه بده
          </p>
          <div className={classes.WhereAreYouContaienr}>
            <WhereIsYourPathIcon />
          </div>
          <div className={classes.WhereIsYourPathMob}>
            <WhereIsYourPathMob />
          </div>
          <button>
            <div>
              {" "}
              بیشتر بدانید <AiOutlineLeft />
            </div>
          </button>
        </div>
      </Element>
    </>
  );
}

export default WhatDoWeDo;
