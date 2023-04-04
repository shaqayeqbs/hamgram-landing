import React from "react";
import classes from "./SuccessfulCompaninos.module.css";
import Carousel from "./Carousel";
function SuccessfulCompaninos() {
  return (
    <section className={classes.section}>
      <h3>همراهان موفق همگرام</h3>
      <div className={classes.container}>
        <h1>
          <p>
            شما هم میتوانید <strong> عضو همراهان موفق همگرام</strong>
            <span>باشید</span>
          </p>
        </h1>
        <p className={classes.margin}>
          شما میتوانید از طریق بخش خدمات همگرام بر اساس نیاز خود با ما همراه
          شوید
        </p>
      </div>
      <Carousel />
    </section>
  );
}

export default SuccessfulCompaninos;
