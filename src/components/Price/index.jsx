import React from "react";
import PriceList from "../icons/landing/PriceList";
import Filter from "./Filter";
import classes from "./price.module.css";
import Table from "./Table";
import Slider from "./slider";
import { useState } from "react";
function Index() {
  const [price, setPrice] = useState(289000);
  return (
    <section className={classes.container}>
      <PriceList />
      <Filter changePrice={setPrice} />
      <div className={classes.desktop}>
        <Table price={price} />
      </div>
      <div className={classes.mob}>
        <Slider price={price} />
      </div>
    </section>
  );
}

export default Index;
