import React, { useState } from "react";
import classes from "./price.module.css";

function Filter({ changePrice }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const FilterHandler = async (e) => {
    let value = e.target.value;
    if (value === "90") {
      setActiveIndex(0);
      changePrice(749000);
    } else {
      setActiveIndex(1);
      changePrice(289000);
    }
  };
  return (
    <section className={classes.filter}>
      <h1>فیلتر بر اساس زمان</h1>
      <div className={classes.filter}>
        <div className={classes.dateContainer}>
          <button
            value={90}
            className={activeIndex === 0 ? classes.active : ""}
            onClick={FilterHandler}
          >
            سه ماهه
          </button>
          <button
            value={30}
            className={activeIndex === 1 ? classes.active : ""}
            onClick={FilterHandler}
          >
            ماهانه
          </button>
        </div>
      </div>
    </section>
  );
}

export default Filter;
