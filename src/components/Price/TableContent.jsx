import React, { memo } from "react";
import classes from "./Table.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function TableContent({ id, username, mainUserUserName, user, created }) {
  return (
    <tr className={classes.tr}>
      <td>{username ? username : mainUserUserName}</td>
      <td>%</td>
      <td>
        <span dir="ltr">fff</span>
        <span className={classes.change} dir="ltr">
          <span className={classes.change}>
            <span>dddd%</span>
          </span>
        </span>
      </td>
    </tr>
  );
}

export default memo(TableContent);
