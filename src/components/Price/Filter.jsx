import React, { useState } from "react";
import classes from "./price.module.css";

function Filter() {
  const [activeIndex, setActiveIndex] = useState(0);

  const FilterHandler = async (e) => {
    let value = e.target.value;
    if (value === "90") {
      setActiveIndex(0);
    } else {
      setActiveIndex(1);
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
