import React from "react";
import PriceList from "../icons/landing/PriceList";
import Filter from "./Filter";
import classes from "./price.module.css";
import Table from "./Table";
import Slider from "./slider";
function index() {
  return (
    <section className={classes.container}>
      <PriceList />
      <Filter />
      <div className={classes.desktop}>
        <Table />
      </div>
      <div className={classes.mob}>
        <Slider />
      </div>
    </section>
  );
}

export default index;
